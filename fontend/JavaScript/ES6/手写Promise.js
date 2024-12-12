// 写一个 符合 Promise A+ 规范的 MyPromise

// Promise 的三种状态
const PENDING = 'Pending';
const FULFILLED = 'Fulfilled';
const REJECTED = 'Rejected';

class MyPromise {
  status = PENDING;
  value = undefined;
  reason = undefined;

  onFulfilledCallbacks = [];
  onRejectedCallbacks = [];

  constructor(executor) {
    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback());
      }
    };

    const reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : reason => {
            throw reason;
          };

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('循环引用'));
  }

  if (x instanceof MyPromise) {
    if (x.status === PENDING) {
      x.then(y => {
        resolvePromise(promise2, y, resolve, reject);
      }, reject);
    } else {
      x.then(resolve, reject);
    }
    return;
  }

  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let called = false;
    try {
      const then = x.then;
      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          r => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
}
// // 添加静态方法
// MyPromise.resolve = function (value) {
//   return new MyPromise(resolve => {
//     resolve(value);
//   });
// };

// MyPromise.reject = function (reason) {
//   return new MyPromise((resolve, reject) => {
//     reject(reason);
//   });
// };

// MyPromise.all = function (promises) {
//   return new MyPromise((resolve, reject) => {
//     const results = [];
//     let count = 0;
//     for (let i = 0; i < promises.length; i++) {
//       promises[i].then(value => {
//         results[i] = value;
//         count++;
//         if (count === promises.length) {
//           resolve(results);
//         }
//       }, reject);
//     }
//   });
// };

// MyPromise.race = function (promises) {
//   return new MyPromise((resolve, reject) => {
//     for (let i = 0; i < promises.length; i++) {
//       promises[i].then(resolve, reject);
//     }
//   });
// };

const p = new Promise((resolve, reject) => {
  console.log('ssss', typeof this, this instanceof Promise, this.toString());

  resolve(5);
})
  .then(res => {
    console.log(res);

    console.log(1);
    return 1;
  })
  .then(res => {
    console.log('2');
  })
  .then(res => {
    console.log('3');
  })
  .then(res => {
    console.log(4);
  });

const myP = new MyPromise(resolve => {
  resolve(10);
})
  .then(res => {
    console.log(1);
  })
  .then(res => {
    console.log(2);
  })
  .then(res => {
    console.log(3);
  })
  .then(res => {
    console.log(4);
  });
