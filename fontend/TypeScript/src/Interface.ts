// Ts 中的接口采用的是鸭子辨形法
console.log('\n\n\n' + '=='.repeat(10) + '接口' + '=='.repeat(10));
// 定义一个接口
interface Pen {
  len: number;
  color: string;
}

let mypen = {
  len: 10,
  color: 'red',
};

function show(pen: Pen): void {
  console.log(`这是一支笔，长度：${pen.len},颜色：${pen.color}`);
}
show(mypen);

// 可选属性
interface Cat {
  claws?: boolean;
  jump?(): void;
}

function showCat(cat: Cat) {
  console.log(`this cat has claws? ${cat.claws || 'no'}, can jump? ${cat.jump || 'no'}`);
}
showCat({ claws: true });

// 只读属性
interface myReadonly {
  readonly x: number;
  readonly y: number;
}
let readonly1: myReadonly = { x: 1, y: 2 };
// readonly1.x = 2;
// 修改后编译保存
console.log('修改只读属性：', readonly1);

// 鸭子辩型法
interface Animal {
  eat?(): void;
  age: number;
  name: string;
}
interface plant {
  age: number;
  name: string;
  [pro: string]: any; // 允许添加其他属性
}
let myPlant: plant = { age: 1, name: 'fllower' };
// 如果超出多余的属性则报错
let myPlant2: plant = { age: 1, name: 'fllower', place: 'home', color: 'red' };
function showAnimal(animal: Animal) {
  console.log(`Animal name:${animal.name}, animal age:${animal.age}`);
}
// 只要规定的属性都存在，则是相同的类型
showAnimal(myPlant);

// 用接口定义函数类型
interface FunctionPro {
  show(property: { time: string; times: number }): void;
  add(num1: number, num2: number): number;
}
let myObj: FunctionPro = {
  show(pro) {
    console.log(pro);
    return 1; // 即便方法签名里面指定返回值为空，但是依然可以有返回值
  },
  add(a, b) {
    return a + b;
  },
};

console.log('签名返回值为空的函数依然可以有返回值', myObj.show({ time: '2020-5-6', times: 2 }));

// 可索引的类型
interface StringArr {
  [index: number]: string;
}
interface NumberArr {
  [index: string]: number;
}
let strArr: StringArr = ['1', '2', '3'];
let numArr: NumberArr = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
};

// 接口继承接口   接口可以多继承
interface Dog extends Animal {
  fet(): void;
}
interface newCat extends Animal, Dog {
  jump(): void;
}

interface mulitPropertyObject {
  readonly name: string;
  readonly age: number;
  addr: string;
  isMarried: boolean;
  guraduation: {
    school: string;
    calss: string;
    stdNum: number;
    habby: string[];
    qq: string;
    wechat: string;
  };
}

const student: mulitPropertyObject = {
  name: 'xxx',
  age: 21,
  addr: 'ssxxd',
  isMarried: false,
  guraduation: {
    school: 'xxx',
    calss: 'xx',
    stdNum: 3,
    habby: [],
    qq: '1231231231',
    wechat: 'xd',
  },
};
