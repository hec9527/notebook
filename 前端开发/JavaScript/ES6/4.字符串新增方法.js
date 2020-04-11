
// 因为 ES5 的 fromCharCode 只能识别到 0xffff 的码点，说一高位被忽略
console.log(String.fromCharCode(0x20BB7));
console.log(String.fromCharCode(0x0BB7));



// ES6  提供了新的可以识别高位的方法    两个不同的字符串  高位没有被省略
console.log(String.fromCodePoint(0x20BB7));
console.log(String.fromCodePoint(0x0BB7));



// ES6 提供的原始字符串   将每个反斜杠都转译成双反斜杠
// String.raw  专门用于处理模板字符串
var str = String.raw({ raw: ['this is the ', ' times'] }, 2 + 2);
console.log(str);
var str = String.raw`this is the \n ${"1th"} times I come`;
console.log(str);

