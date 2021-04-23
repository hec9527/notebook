/**
 * 原型
 *    1, 每一个函数都有一个prototype属性, 是这个函数的原型
 *    2, 函数原型是一个对象，包含一个constructor属性，指向构造函数
 *          Person.prototype.constructor === Person
 *    3, 函数构造的实例包含一个指针指向函数的原型（在safari、chrome、firfox浏览器中为实例的__proto__属性）
 *    4, 原型上的原始类型只能引用，不能赋值，赋值的时候会在实例上添加一个原始属性并且赋值
 *       原型上的引用类型，所有实例共享（基于原型的继承的缺点）
 *
 */
function Person() {
  this.name = 'saga';
  this.age = 32;
}

Person.prototype.books = ['English', 'Math', 'Physics'];

Person.prototype.sayName = function () {
  console.log('hello, my name is:' + this.name);
};

const p = new Person();

console.log(Person.prototype.constructor === Person);
console.log(p);
p.sayName();
p.books.push('Chinese');
console.log(p.books);

const p1 = new Person();
console.log(p1.books);
console.log();

/**
 *  原型检查
 *    1, 使用 instanceof 可以检查一个对象是不是某个构造函数的实例
 *    2, 使用 Object.getPrototypeOf(o) 获取对象的原型
 *    3, 手动赋值原型为一个新的对象字面量，影响类型检查
 *    4, 使用 Object.setPrototypeOf(0) 修改对象的原型， 影响性能
 *    5, 使用 Object.create(o) 来指定原型，也可以传入 null， 创建一个没有原型的对象
 *
 *  属性检查
 *    1, 如果自己有，就返回自己的属性，没有级查找原型上的属性
 *    2, 如果原型不存在这个属性，就继续在原型的原型上查找
 *    3, 如果查找到Object依然没有，则返回undefined
 *
 *  属性赋值
 *    1, 如果自己有，则修改自己的属性值
 *    2, 如果自己没有，并且修改的属性为原始类型，则在自身创建一个新的属性，并且赋值
 *    3, 如果自己没有，并且修改的属性为引用类型，则在逐级查找原型，找到并修改属性，如果原型链上没有这个属性，则在自身创建这个属性并赋值
 */
console.log(p instanceof Person);
console.log(Object.getPrototypeOf(p) === Person.prototype);
Person.prototype = {
  //   constructor: Person,
  books: ['English', 'Math', 'Physics'],
  sayName() {
    console.log('hello, my name is:' + this.name);
  },
};
console.log(p instanceof Person);
console.log(Object.getPrototypeOf(p) === Person.prototype);

// Object.create
const plainObject = Object.create(null);
console.log('纯对象 (plainObject) 原型', Object.getPrototypeOf(plainObject));
for (let k in plainObject) {
  console.log(k);
}
console.log();

/**
 * 属性检查
 *    1, obj.hasOwnProperty(str)   检查自身是否存在某个属性
 *    2, in 操作符  检查自身以及原型链上是否存在属性
 *    3, 判断属性是否在原型上， 组合hasOwnProperty 和 in :    !obj.hasOwnProperty('name')&& 'name' in obj
 *
 * 属性遍历
 *    1, for in 循环， 检查自身以及原型链上的可枚举属性，不包含Symbol，  不确定顺序
 *    2, Object.keys  检查自身可枚举属性，不包含Symbol    不确定属性
 *    3, Object.getOwnPropertyNames(o)  获取自身所有属性 可枚举+不可枚举     先数字，后字母
 *    4, Object.getOwnPropertySymbols(o)  获取自身所有Symbol属性
 */
console.log('属性检查');
console.log(p.hasOwnProperty('name'), p.getOwnProperty('name'));
console.log('books' in p, 'name' in p1, 'toString' in p1);

for (let k in p) {
  console.log(k);
}
Object.keys(p).forEach(console.log);
