// 承诺

const result = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = Math.random();
        console.log('异步结果：', result);

        if (result < 0.35) {
            resolve(true);
        } else if (result < 0.7) {
            reject(false);
        } else {
            new Error('操作错误'); // 外部不能捕获到这个错误
        }
    }, 100);
}).then(
    // 当成功之后之行这个
    arg => {
        console.log('then:', arg);
        return arg;
    },
    // 当失败之后之行这个  不再需要 catch
    arg => {
        console.log('then:', arg);
        return arg;
    }
);

console.log('result', result); // 比上面的回调先之行    result Promise { <pending> }

// 链式调用

new Promise((resove, reject) => {
    setTimeout(() => {
        const result = Math.random();
        console.log('---------------------');
        console.log('result:', result);

        if (result < 0.6) {
            resove(result);
        } else {
            reject(result);
        }
    }, 100);
})
    .then(arg => {
        console.log('第一次处理:', arg);
        arg *= 2;
        return arg;
    })
    .then(arg => {
        console.log('第二次处理：', arg);
        arg *= 2;
        return arg;
    })
    .then(arg => {
        console.log('第三次处理：', arg);
        return arg;
    })
    .catch(e => {
        console.error(e);
    });

// 链式回调

new Promise((res, rej) => {
    setTimeout(() => {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        Math.random() < 0.5 ? res(true) : rej(false);
    }, 100);
})
    .then(
        res => {
            console.log('第一次回调成功', res);
            return new Promise((res, rej) => {
                setTimeout(() => {
                    Math.random() < 0.5 ? res(true) : rej(false);
                }, 100);
            });
        },
        res => {
            console.log('第一次回调失败', res);
            return new Promise((res, rej) => {
                setTimeout(() => {
                    Math.random() < 0.5 ? res(true) : rej(false);
                }, 100);
            });
        }
    )
    .then(
        res => {
            console.log('第二次回调成功', res);
            return new Promise((res, rej) => {
                setTimeout(() => {
                    Math.random() < 0.5 ? res(true) : rej(false);
                }, 100);
            });
        },
        res => {
            console.log('第二次回调失败', res);
            return new Promise((res, rej) => {
                setTimeout(() => {
                    Math.random() < 0.5 ? res(true) : rej(false);
                }, 100);
            });
        }
    )
    .then(
        res => {
            console.log('第三次回调成功', res);
        },
        res => {
            console.log('第三次回调失败', res);
        }
    )
    // es 2018 接入
    .finally(res => {
        console.log('最终执行');
    });
