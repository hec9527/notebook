/**
 * 泛型
 * 使用类型变量，用于表示类型
 */

// 函数中使用泛型  中括号中的泛型变量可以使用任意名称，通常使用T
function identity<T>(arg: T): T {
    return arg;
}
// 调用的时候指定参数的类型，也可以不指定
identity<string>('hello wolrd');
identity<number>(1);
// 不指定泛型的类型值
identity('2');

// 泛型类
class ClassA<T> {
    property1: T;
    property2: T;
    property3: string = 'hello world';
    constructor(p1: T, p2: T) {
        this.property1 = p1;
        this.property2 = p2;
    }
}

// 泛型约束
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// 泛型约束
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a'); // okay
