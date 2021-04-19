// class People {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayInfo() {
//     console.log('hello, my name is: ' + this.name + ', age is:' + this.age);
//   }
// }

// const people = new People('saga', 34);
// people.sayInfo();

function People(name, age) {
  this.name = name;
  this.age = age;
}

function Animal(name) {
  this.name = 'animal:' + name;
  this.bark = function () {
    console.log(this.name + 'is barking');
  };
}

People.prototype.sayInfo = function () {
  console.log('hello, my name is: ' + this.name + ', age is:' + this.age);
};
People.prototype.constructor = Animal;

var alice = new People('alice', 32);
console.log(People.prototype);
