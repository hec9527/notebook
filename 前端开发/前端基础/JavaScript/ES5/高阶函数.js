const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach 实现map的方法
arr.forEach((value, index, arr) => {
    console.log(value, index, arr);
    arr[index] = value * value;
});

// map
arr1 = arr.map((value, index, arr) => {
    console.log(value, index, arr);
    console.log(this);
    return value * value;
});

arr1_1 = arr.map(value => value * value);

// filter
arr2 = arr.filter((value, index, arr) => value > 5);

// every
arr3 = arr.every((value, index, arr) => {
    return value < 40;
});
arr3_1 = arr.every(value => value < 40);

// some
arr4 = arr.some((value, index, arr) => value < 2);

// reduce
arr5 = arr.reduce((pre, cur, index, arr) => {
    console.log(`pre:${pre}  cur:${cur}  index:${index}  arr:${arr}`);
    return cur + pre;
});

// <hr/>

// 类数组
obj_arr = {};
obj_arr.push = Array.prototype.push;
obj_arr.push(1);

// <hr/>

// call / apply
function Foo(name, age) {
    this.name = name;
    this.age = age;
}
const obj_call = {};
const obj_apply = {};
Foo.call(obj_call, 'call', 12);
Foo.apply(obj_apply, ['apply', 11]);

// bind
// 案例一
const obj_bind = { name: 'bind', version: '1.0.0', author: 'hc' };
const foo4 = Foo.bind(obj_bind, 'tom', 22);
// 案例二
function foo5() {
    console.log(this.name, arguments);
}
const obj_bind1 = { name: '草泥马' };
const obj_bind2 = { name: '王泥马' };
const foo6 = foo5.bind(obj_bind1, '其它参数', '其它参数');
const foo7 = foo5.bind(obj_bind2, '其它参数', '其它参数');

// arguments
// 如果将`arguments`作为形参则，会覆盖函数作用域默认的形参
function foo1(name, arguments) {
    console.log(name, arguments);
}
foo1('name', 'asdsada');

// callee  /  caller
// callee: 指代当前正在执行的函数, 是`argumens`对象的一个属性
// caller： 调用当前正在执行的函数的函数（当前函数的调用者） 非标准     是函数的一个属性，使用<函数名.caller>
function foo2() {
    console.log('foo2', arguments.callee);
    console.log('foo2', foo2.caller);
    foo3();
}
function foo3() {
    console.log('foo3', foo3.caller);
}
// (function (x = 1) {
//     console.log(arguments);
//     return x > 10 ? x : arguments.callee(x + 1);
// })()
foo2();

// 深拷贝
const target = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
};
const arr6 = [
    [1, 2, 3, 4, 5, 6, 7],
    [7, 6, 5, 4, 3, 3, 2],
    [2, 3, 4, 5, 4, 4, 4],
    [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4]
    ]
];
function clone(target) {
    if (typeof target === 'object') {
        // 判断是否为数组
        let cloneTarget = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
}
const target1 = clone(target);
const arr7 = clone(arr6);

// 强弱引用
// let strong = { name: "强引用" }
// const weak = new WeakMap()
// weak.set(strong,"弱引用")
// console.log(strong, weak, strong === weak)
// strong = null
// console.log(strong, weak, strong === weak)

// 闭包
var foo1 = (() => {
    let index = 0;
    return () => {
        return ++index;
    };
})();

// 单例模式
// 饿汉模式/懒汉模式
// 优缺点
function Foo2(name, age) {
    if (Foo2.entity) {
        return Foo2.entity;
    } else {
        this.name = name;
        this.age = age;
        Foo2.entity = this;
    }
}
const singleton1 = new Foo2('王尼玛', 30);
const singleton2 = new Foo2('草泥马', 22);
console.log(singleton1 === singleton2); // true
