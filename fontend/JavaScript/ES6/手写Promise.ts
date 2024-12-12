type IPromiseLike<T> = {
  then(
    resolve: (value: T) => T | PromiseLike<T>,
    reject: (reason: any) => T | PromiseLike<T>
  );
};

const microTask = (task: Function) => {
  const mutationObserve = new MutationObserver(() => task());

  const node = document.createElement('div');
  mutationObserve.observe(node, { childList: true });
  node.innerHTML = '1';
};

class MyPromise<T = any> {
  state: 'Pending' | 'Fulfilled' | 'Rejected' = 'Pending';

  private value: T | undefined = undefined;

  private reason: any = undefined;

  private resolveCallbacks: Array<(value: T) => void> = [];

  private rejectCallbacks: Array<(reason: any) => void> = [];

  constructor(
    executor: (
      resolve?: (value: T) => void,
      reject?: (reason: any) => void
    ) => void
  ) {
    const resolve = (value: T) => {
      if (this.state === 'Pending') {
        this.value = value;
        this.state = 'Fulfilled';
        this.resolveCallbacks.map(cb => cb(value));
      }
    };

    const reject = (reason: T) => {
      if (this.state === 'Pending') {
        this.reason = reason;
        this.state = 'Rejected';
        this.rejectCallbacks.map(cb => cb(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then<Result1, Result2>(
    onResolve?: (value: T) => PromiseLike<Result1> | Result1,
    onReject?: (reason: any) => PromiseLike<Result2> | Result2
  ) {
    if (typeof onResolve !== 'function') {
      onReject = v => v;
    }
    if (typeof onReject !== 'function') {
      onReject = e => {
        throw e;
      };
    }

    const that = this;

    const newPromise = new MyPromise((resolve, reject) => {
      switch (this.state) {
        case 'Pending':
          that.resolveCallbacks.push(() => {
            microTask(() => {
              try {
                const value = onResolve(that.value);
                // todo resolve new Promise
              } catch (error) {
                reject(error);
              }
            });
          });
          that.rejectCallbacks.push(() => {
            microTask(() => {
              try {
                const value = onReject(that.reason);
                //
              } catch (error) {
                reject(error);
              }
            });
          });
          break;
        case 'Fulfilled':
          // value 不能是之前的promise， value必须是一个promise
          const value = resolve(that.value);
          break;
        case 'Rejected':
          const reason = reject(that.reason);
          //
          break;
      }
    });

    return newPromise;
  }
}

function resolvePromise(
  promise: MyPromise,
  value: any,
  resolve: (value: any) => unknown,
  reject: (value: any) => unknown
) {
  if (promise === value) {
    throw new Error('禁止循环引用');
  }

  if (value instanceof MyPromise) {
    if (value.state === 'Pending') {
      value.then(value => {
        resolvePromise(promise, value, resolve, reject);
      });
    } else {
      value.then(resolve, reject);
    }
    return;
  }
}
