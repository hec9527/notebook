// 数字类型
let num: number;
num = 2;
num = 1.1;
num = 2e23;
num = 0xffe;
num = 0o123;
num = 0b10101;
// num = null; // 不能把null分配给number类型
// num = undefined; // 不能把undefine 分配给number类型

// 字符串类型
let str: string;
str = 'this is string';
str = '这是一个字符串';
str = `这个确实是一个字符串，上面的数字${num}可以证明`;

// 数组类型
let arr: (string | number)[];
arr = [
    1,
    4,
    '这里可以有数组',
    '也可以有字符串',
    '具体的看申明类型的时候可选的类型那有些',
    '注意和元组类型区别开来',
    // false,  // boolean不能赋值给arr，类型申明中没有
    // undefined, // 不能把undefined 分配给arr
    // ,  数组中不能预留值
];

// 定义一个枚举类型
enum Color {
    red,
    green,
    blue,
}
// 使用这个枚举类型 并且赋值
// enum是关键字，不能用来定义变量名
let Tenum: Color = Color.red;

// 元组类型
let tup: [string, number, boolean];
tup = ['1123', 2123, false]; // 元组的展示方式和数组相似

// 对象类型
let obj: object;
// obj = 123; // 不能赋值为数字
obj = {};
obj = Object.create(null);

// 任意类型
// 没事别用，让TypeScript没有类型提示了
let any: any;
any = undefined;
any = null;
any = NaN;
any = 1;
any = 'str';
any = {};
any = [];
any = false;
any = tup; // 把元组赋值给它
any = Tenum; // 把枚举类型赋值给它

// 空值类型，只能赋值为undefined
let a: void;
a = undefined;
// a = null; // 不能赋值为 null
// a = NaN;  // 不能赋值为 NaN
console.log(a); // undefined

// null 类型
// 只能赋值为null
let b: null;
// b = 1; 不能赋值为数字
// b = undefined; // 不能赋值为undefiend
b = null;

// undefiend 类型
let c: undefined;
// 只能赋值为undefined
// c = 1; // 不能赋值为数字
// c = null; // 不能赋值为null
c = undefined;

// never 类型
// never 类型一般用不函数的返回值，当函数存在用户不可达的终点，就返回never
// let d: never = ((): never => {
//     throw new Error();
// })();
// never 后面的代码都无法访问
// let d: never = ((): never => {
//     while (true) {}
// })();

// symbol 类型
// symbol 值每一个都是独一无二的
const s = Symbol('s2'); // symbol 类型需要使用函数创建

// 解构默认值  配合   类型申明？
const myObj1 = { a: 1, b: 'str' };
const { a: e, b: d }: { a: number; b: string } = myObj1;
