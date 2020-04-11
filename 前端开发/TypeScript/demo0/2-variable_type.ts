// 布尔值
let isOk: boolean = false;
console.log('布尔类型：', isOk);

// 数字
let num16: number = 0x6;
let num10: number = 6;
let num8: number = 0o6;
let num2: number = 0b110;
console.log('数字类型：', num16, num10, num8, num2);

// 字符串类型
let str: string = 'this is a string type variable';
console.log('字符串：', str);

// 普通数组
let arrNum: number[] = [1, 2, 3, 4];
let arrStr: string[] = ['1', '2', '3', '4'];
let arrBool: Boolean[] = [false, true, false, false];
console.log(
    '********普通数组不能像JS一样包含多种数据类型********\nnumber类型数组：',
    arrNum
);
console.log('字符串类型数组：', arrStr);
console.log('布尔类型数组：', arrBool, '\n...');

// 泛型数组  依然不能使用混合类型的数组
let arr: Array<number> = [1, 2, 3, 4, 5, 4];
console.log('泛型数组：', arr);

// 任意数组  包含的元素为任意类型的
let arrAny: any[] = [1, '2', false, { x: 1, y: 2 }, undefined, null];
console.log('任意类型的数组可以像JS一样使用：', arrAny);

// 元组    元组不需要具有相同类型，但是每个位置的类型以及长度必须确定
let tuple: [string, number, boolean, object];
tuple = ['1', 1, false, {}];
console.log('元组可以修改，需要规定每个位置的类型以及长度：', tuple);

// 枚举类型

enum color {
    r,
    g,
    b
}
let r: color = color.r; // 获取枚举值索引
let str1: string = color[2];
console.log('枚举类型：', color);
console.log('枚举索引：', r);
console.log('枚举值：', str1);

// 任意值
let any: any = 12;
console.log('任意值，当前为数字：', any);
console.log('任意值，当前为string：', (any += 's'));
console.log('任意值，当前为boolen：', (any = false));
console.log('任意值，当前为object：', (any = { x: 1, y: 2 }));
console.log('任意值，当前为undefiend: ', (any = undefined));

// 空值   void类型变量只能赋予 undefined / null
let voidVar: void = null;
function foo(): void {
    // return '';  // void函数不能有显示返回值
}

// never  任何类型的子类， 可以给任意类型赋值为never，但是除了never类型不能给任意类型赋值为nerver类型
let any1: any = 1;
let never1: never;
// if (!never1) {
//     console.log(1);
// }
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
        console.log(1);
    }
}

// 断言
let someValue: any = 'this is a string';
let strLength1: number = (<string>someValue).length; // 尖括号形式
let strLength2: number = (someValue as string).length; // as / 在jsx中只能使用as语法，不能使用尖括号语法

// 申明

let a = 1;
const B = 2;
