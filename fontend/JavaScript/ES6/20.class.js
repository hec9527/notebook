class Foo {
    constructor() {
        this.name = 'tom';
        this.age = 12;
        this.addr = 'xxx街道xxx小区';
    }

    // set name(name) {
    //     console.log('set name:', name);
    //     name = name;
    // }

    // get name() {
    //     return this.age;
    // }
}

let foo = new Foo();

console.log(foo);

foo.name = 'tony';

console.log(foo);

// 私有属性和私有方法      --------   暂时不可用

// class Private {
//     constructor() {
//         this.name = 'tom';
//         this.#wife = 'xxx';
//     }

//     getWife() {
//         return null;
//     }

//     setWife() {
//         this.#private();
//     }

//     #private() {
//         console.log(this.#wife);
//     }
// }

// foo = new Private();

// console.log(foo.name);
// console.log(foo.wife);

// -----------------------      继承关系     -----------
class A {}
class B extends A {}

let a = new A();
let b = new B();

console.dir(a.__proto__);
