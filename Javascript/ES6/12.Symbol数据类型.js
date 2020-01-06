let s1 = Symbol();
console.log(typeof s1); // symbol

s1 = Symbol('属性描述'); // 可以使用中文
console.log(s1); // 属性描述

let s2 = Symbol('属性描述');
console.log(s1 === s2); // false
console.log(s1 === s1); // 和自身相等
console.log(s1.valueOf()); // Symbol(属性描述)
console.log(s1.toString()); // Symbol(属性描述)
console.log(s1.description); // 属性描述

// -----------------    Symbol 作为属性值的时候    ----------------------

const obj = {
    x: 1,
    y: 2,
    [s1]: 'hello'
};

let s3 = Symbol('通过defineProperty定义的属性');

obj[s2] = 'world';

Object.defineProperty(obj, s3, {
    value: 'Javascript'
});
console.log(obj);
console.log(obj[s3]); // JavaScript

let s4 = Symbol.for('属性描述');
console.log(s4, s1, s4 == s1);
