function log(target) {
  console.log(target.toString());
}

class Person {
  name = 'saga';
  age = 33;

  @log
  say() {
    console.log(`hello, I\'am ${this.name}`);
  }
}

const person = new Person();

person.say();
