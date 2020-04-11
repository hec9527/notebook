const obj = {
    x: 1,
    [Symbol.iterator]: function() {
        let i = 0;
        return {
            next: () => (i <= 10 ? { value: i++ } : { done: true })
        };
    }
};

for (let value of obj) {
    console.log(value);
}

console.log('----------------');

// 给forEach 方法，添加退出
Array.prototype[Symbol.iterator] = function() {
    const self = this;
    let index = 0;

    return {
        next() {
            return index <= self.length
                ? { value: self[index++], done: false }
                : { value: undefined, done: true };
        }
        // return() {
        //     console.log('中途退出');
        //     return { done: true };
        // }
        // throw: () => {
        //     throw new Error('自定义错误');
        // }
    };
};

let arr = [1, 2, 3, 4, 5, 6, 7];

// for (let key in arr) {
//     console.log(key);
// }
arr.forEach(item => {
    console.log(item);
});
