import pkg, { version } from '../package.json';

const add = (x, y) => x + y;

const reduce = (x, y) => x - y;

console.log(add(1, 2));
console.log(add(2, 4));
console.log(reduce(4, 2));

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }
}

// const stu = new Student('张三', 24, 5109221995);

console.log('version', version);

console.log({ pkg });
