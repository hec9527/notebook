// 基于构造函数的构造器，一般采用大写的字母开头
function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;

    this.play = function () {
        console.log('I play my finger');
    };

    this.say = function () {
        console.log('my hobby is:', this.hobby);
    };
}

const p1 = new Person('张三', 22, '打篮球');
p1.play(); // I play my finger
p1.say(); //my hobby is: 打篮球

const p2 = new Person('李四', 24, '玩游戏');
p2.play(); // I play my finger
p2.say(); // my hobby is: 玩游戏

// 基于原型链的继承
function Animal(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
}
Animal.prototype.eat = function () {
    console.log('I want eat');
};
Animal.prototype.run = function () {
    console.log('I run');
};
function Dog(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
}
Dog.prototype = Animal.prototype;

const dog1 = new Dog('小小', 2, '萨摩耶');

dog1.eat();
