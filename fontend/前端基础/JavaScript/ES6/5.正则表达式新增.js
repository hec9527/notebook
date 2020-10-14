
// ES5 当中正则表达式的构造函数，2个参数的话，第一个为字符串，第二个为修饰符
//     如果第一个为正则表达式字面量 则没有第二个参数

var str = "hello world  hd";
var pattern = new RegExp("^H.*?D", 'ig');
var result = pattern.exec(str);
console.log(result);
// console.log(typeof result);     // 正则匹配结果的对象有点奇怪 不是正常的对象


// ES6 新增/修复了这个问题    在第一个参数为正则表达式字面量的时候，第二个参数可以有
//     同时第二个参数的存在会忽略正则字面量当中的修饰符
try {
    var pattern = new RegExp(/^h.*?D$/ig, 'i');
    console.log(pattern.exec(str));
} catch (error) {
    console.log("正则表达式第二个参数错误");
}


// String  match
var result = str.match(/h.*?d/ig);
console.log(result);
var result = str.replace(/h.*?d/ig, "***");
console.log(str, "\n", result);



