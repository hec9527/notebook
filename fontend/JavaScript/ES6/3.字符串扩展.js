// Unicode 码点
console.log("\uD842\uDFB7" === "\u20BB7");
console.log("\uD842\uDFB7" === "\u{20BB7}");

// 默认只能识别 0u0000 ~ 0uffff之间的字符，超过就解释为2个字节



for (let char of "hello world") {
    console.log(char);
}
let text = String.fromCodePoint(0x20BB7);
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}
for (let i of text) {
    console.log(i);
}





// 标签模板
// 标签模板函数中的arguments对象(参数列表)，第一个参数为模板字符串参数之间没有被解析为参数的字符串列表
//      剩下的参数为模板字符串中的参数
console.log`1fuck`;
console.log(foo`this is the ${"1th"} time I use tag template, it can contain some args: ${'args1'}`);
function foo(strs, ...args) {
    let result = "";
    for (let i = 0, len = args.length; i < len; i++) {
        result += strs[i] + args[i];
    }
    result += strs[strs.length - 1];
    return result;
}

let total = 30;
let msg = passthru`The total is ${total} (${total * 1.05} with tax)`;
function passthru(literals, value1, value2) {
    console.log(literals, value1, value2);
    console.log(arguments);
    let result = '';
    let i = 0;
    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }
    return result;
}
console.log(msg);
