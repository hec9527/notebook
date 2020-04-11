/**
 * 解构
 * 解构的大括号不应该应用在首列避免解释为代码块
 * 解构的左侧可以不放置任何变量名
 * undefined、 null 不能转换为对象所以不能解构
 * 函数的参数列表也可以使用解构赋值
 */



// 数组的解构用法  
// 因为变量是有序的，所以解构时只需要将变量放在对应的位置上即可解构赋值

// 基本用法
var [a, b, c, d] = [1, 2, 3];
console.log(a, b, c, d);
// 如果解构的时候值的数量不匹配的话则多余的赋值为undefined    解构不成功


// 进阶用法
console.log("进阶");

var [a, [b], c] = [1, [1, 2, 3, 4], 2];
console.log(a, b, c);

var [a, , c] = [1, 2, 3];
console.log(a, c);

var [a, ...b] = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0];
console.log(a, b);


// 当等号右边的变量不可遍历或者转换之后不可遍历、不具备遍历iterator 接口  则结构报错
// 具体有 数字、布尔、NaN、undefined、null、{}



// 解构的默认值 
// 解构的默认值用于严格判定一个值是否为undefined 如果解构的结果就是undefined也会使用默认值
console.log("解构的默认值");
var [a, b, c, d = 1] = [1, 2, 3];
console.log(a, b, c, d);

var [a = 1, b = 2] = [3, 4, 5];
console.log(a, b);



// 对象的解构赋值
// 因为对象的键是没有顺序的，所以不能像数组哪像使用对应的位置解构赋值，这时候只能变量名与数组的属性相同才能解构
// 解构失败的值  默认为 undefined
console.log("对象的解构赋值");

var { name, age, site } = {
    name: "tom",
    age: 123
}
console.log(name, age, site);

// 修改解构之后的变量的名称,  之前的变量则不能使用了
var { name: n, age: a, site: s } = {
    name: "tony",
    age: 22
}
console.log(n, a, s);


// 解构也适用于嵌套对象
var { part: { epm } } = {
    part: {
        epm: 22
    }
}
console.log(epm);

// 解构允许使用默认值
var { part = 'dev', name = "tony" } = {
    part: "test",
}
console.log(part, name);

// 类数组、字符串也可以使用解构
var [a, b, c, d, e] = "hello";
var { length: len } = "hello";







