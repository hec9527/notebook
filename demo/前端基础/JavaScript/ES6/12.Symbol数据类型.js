let s1 = Symbol();
console.log(typeof s1); // symbol

s1 = Symbol('s1'); // 可以使用中文
console.log(s1); // 属性描述

let s2 = Symbol('s2');
console.log(s1 === s2); // false
console.log(s1 === s1); // 和自身相等
console.log(s1.valueOf()); // Symbol(属性描述)
console.log(s1.toString()); // Symbol(属性描述)
console.log(s1.description); // 属性描述

// -----------------    Symbol 作为属性值的时候    ----------------------

const obj = {
    x: 1,
    y: 2,
    [s1]: 'hello',
};

let s3 = Symbol('s3');

obj[s2] = 'world';

Object.defineProperty(obj, s3, {
    value: 'Javascript',
    enumerable: true, // 修改为可枚举的
    writable: false, // 无法被修改，但是修改的时候不会提示错误
});
console.log(obj);
console.log(obj[s3]); // JavaScript

let s4 = Symbol.for('s1');
let s5 = Symbol.for('s1');
console.log(s4, s1, 's4===s1?', s4 == s1, 's5===s5?', s4 === s5);

// Reflect.ownKeys() 可以获取到对象上面的所有健，包括 symbol

obj[s3] = 'hahahhaha';
console.log(obj);

console.log(`使用Reflect.ownKeys()获取对象的健：`, Reflect.ownKeys(obj));

console.log(`获取对象的Symbol属性：`, Object.getOwnPropertySymbols(obj));

console.log('获取Symbol属性，和原来的相等？:', Symbol.keyFor(s4)); // 查找symbol注册的symbol值
