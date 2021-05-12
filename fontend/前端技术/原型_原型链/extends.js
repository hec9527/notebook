/**
 * 派生类
 */
class Vehicle {
  constructor() {
    this.vehicle = 4;
  }
}

class Car extends Vehicle {
  constructor() {}
}

// const c = new Car();
// console.log(c.vehicle);

/**
 *  抽象类
 */
class AbsVehicle {
  constructor() {
    if (new.target === AbsVehicle) {
      throw new Error('AbsVehicle 不能被直接实例化');
    }
  }
}

// const abs = new AbsVehicle();

/**
 * call 改变this调用？
 */
class P {
  constructor() {
    this.name = 'p';
  }
}

class S extends P {
  constructor() {
    super();
  }
  sayName() {
    console.log(super.name);
  }
}

class P1 {
  constructor() {
    this.name = 'P1';
  }
}
class S1 extends P1 {
  constructor() {
    super();
  }
  sayName() {
    console.log(super.name);
  }
}

const sa = new S();
const ss = new S1();

console.log(sa.sayName());
console.log(ss.sayName());
sa.sayName.call(ss);
