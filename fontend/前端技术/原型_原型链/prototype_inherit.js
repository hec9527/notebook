/**
 * 原型链继承
 *   缺点
 *      1, 无法向原型构造函数传值，所有构造出来的对象都具有相同的值
 *      2, 原型上的引用类型，所有实例共享
 */

function Person() {
  this.name = 'saga';
  this.books = ['English', 'Math', 'Physics'];
}
Person.prototype.sayName = function () {
  console.log(`my name is ${this.name}`);
};

function Student(age = 22) {
  this.age = age;
}
Student.prototype = new Person();
Student.prototype.sayAge = function () {
  console.log(`my age is ${this.age}`);
};

const s = new Student();
s.sayName();
s.sayAge();

console.log(s instanceof Student);
console.log(s instanceof Person);
console.log();

/**
 * 盗用构造函数继承   (对象伪装/经典继承)
 *    缺点
 *      1, 无法访问父类原型上的属性和方法，父类方法无法复用
 *      2, 无法检测原型
 *
 */
function Student1(age = 22, ...args) {
  Person.call(this, ...args);
  this.age = age;
}
Student1.prototype.sayAge = function () {
  console.log(`my age is ${this.age}`);
};
const s1 = new Student1(33);
console.log('盗用构造函数', s1);
// s1.sayName();
s1.sayAge();
console.log(s1 instanceof Student1);
console.log(s1 instanceof Person);
console.log();

/**
 * 组合继承
 *    优点：
 *      1, 保留构造函数传参能力
 *      2, 保留父类实例方法，复用
 *      3, 不共享父类引用属性
 *    缺点：
 *      1, 父类实例化两次，自身和原型上都有父类的属性
 *      2, 需要手动修复构造函数指向，否则创建出来的对象为父类对象
 */
function Student2() {
  Person.call(this);
  this.age = 32;
}
// Student2.prototype = new Person();
// 或者是这下这种方式，减少一次实例化父类
Student2.prototype = Person.prototype; // 改变子类的构造函数指向，也会跟着改变父类构造函数指向
Student2.prototype.sayAge = function () {
  console.log(`my age is ${this.age}`);
};
Student2.prototype.constructor = Student2; // 如果不指定构造函数，那么构造出来的对象为Person类型

const s2 = new Student2();
console.log('组合继承：', s2);
s2.sayName();
s2.sayAge();
console.log(s2 instanceof Student2);
console.log(s2 instanceof Person);
console.log(Person.prototype);
console.log();

/**
 *  寄生/组合
 */
function Student3(...args) {
  Person.apply(this, args);
  this.age = 123;
}
Student3.prototype = Object.create(Person.prototype);
Student3.prototype.constructor = Student3;

const s3 = new Student3();
console.log('寄生组合', s3);
s3.sayName();
s3.sayAge();
console.log(s3 instanceof Student3);
console.log(s3 instanceof Person);

// 如果环境中不存在 Object.create 可以用这个函数
function inherit(o) {
  function Foo() {}
  Foo.prototype = 0;
  return new Foo();
}
