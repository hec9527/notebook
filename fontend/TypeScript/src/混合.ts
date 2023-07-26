export default {};

/**
 *   *   混合继承
 *
 *   混合是一个函数， 接收一个类，返回一个新的类，并且扩展其中的方法、属性
 */

type Constrctor<T = {}> = new (...args: any[]) => T;

class People {
  constructor(public name: string = 'saga') {}
}

function mixinMale<T extends Constrctor>(BaseClass: T) {
  // 返回一个匿名类，继承自传入的类
  return class extends BaseClass {
    sex: string = 'male';
  };
}

function mixinAge<T extends Constrctor>(BaseClass: T) {
  return class extends BaseClass {
    age: number = 22;
  };
}

function mixinStudent<T extends Constrctor>(BaseClass: T) {
  return class extends BaseClass {
    school: string = 'SC universal';
  };
}

const SCMalStudentWithAge = mixinStudent(mixinAge(mixinMale(People)));
const p = new SCMalStudentWithAge();
console.log(p.name, p.age, p.sex, p.school);
