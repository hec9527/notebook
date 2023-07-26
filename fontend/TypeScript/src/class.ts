/**
 * 类中的属性默认为public 可以不用显示申明
 * 类中可以包含的权限类型有 private   protected
 * private 在类外面无法使用，无法继承
 * protected 无法在类外面使用，派生类可以继承
 */

class Person {
  private age: number;
  public name: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  showAge() {
    return this.age;
  }
}
let person = new Person('张三', 23);
console.log('\n\n\n', '='.repeat(10), '类', '='.repeat(10));
console.log('公共属性直接访问：', person.name);
console.log('私有属性使用访问器访问：', person.showAge());

class Student extends Person {
  Sid: number;
  // protected gread: number;
  constructor(name: string, age: number, Sid: number) {
    super(name, age);
    this.Sid = Sid;
  }
}
let student = new Student('李四', 23, 164131031);
console.log('公有属性，姓名：', student.name, '学号：', student.Sid);
console.log('私有属性：', student.showAge());

// 单例模式
class Sington {
  private count: number;
  static instance: Sington | undefined = undefined;
  private constructor() {
    this.count = 0;
  }
  add() {
    this.count++;
    console.log('count:', this.count);
  }
  subtract() {
    this.count--;
    console.log('count:', this.count);
  }
  static getInstance(): Sington {
    // return Sington.instance ? Sington.instance : new Sington();
    if (Sington.instance) {
      return Sington.instance;
    } else {
      const instance = new Sington();
      Sington.instance = instance;
      return instance;
    }
  }
}

let Sington1 = Sington.getInstance();
let Sington2 = Sington.getInstance();
console.log('单例模式');
Sington1.add();
Sington1.add();
Sington1.add();
Sington1.add();
Sington1.add();
Sington1.add();
Sington1.add();
Sington1.add();
Sington2.add();
Sington2.add();
Sington2.add();
Sington2.add();

// 属性访问权限
class TestA {
  private str: string;
  protected num: number;
  protected readonly num1: number = 2;
  constructor(str: string, num: number) {
    this.str = str;
    this.num = num;
  }
}
class TestB extends TestA {
  constructor(name: string, num: number) {
    super(name, num);
  }
  show() {
    // 父类的属性
    this.num1;
    // 自己的属性
    this.num;
  }
}
let test = new TestA('hello world', 22);
let test1 = new TestB('hello world', 22);

// 参数属性
class TestC {
  // 可以将累的成员写成构造函数的参数
  constructor(private name: string, protected age: number) {}
}

// 存取器
class TestD {
  private name: string = '张三';

  // 只有get 没有set 的属性，自动添加 readonly
  get getName(): string {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }
}

// 抽象类和静态方法
abstract class TestE {
  // 抽象类可以有实现细节
  abstract move(): void;
  show() {
    console.log('这是一个抽象方法');
  }
}
// 如果一个派生类没有实现父类的抽象方法，那么它也应该是抽象的
abstract class TestF extends TestE {}
