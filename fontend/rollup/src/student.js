import Person from './person';

export default class Student extends Person {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }
}
