// const arrowFunction

// const show = a => {
//   return a + 5;
// };

// console.log(show(123));
// console.log(show(234));

//  forof
// const arr = [1, 2, 3, 4, 5, 6, 6, 7, 7];
// for (let s of arr) {
//   console.log(s);
// }

// 动态导入
// import('./add').then(s => {
//   console.log(s);
// });

// 解构

const obj = {
  name: 'saga',
  age: 43,
  say() {
    console.log(`Hello, I'am ${this.name}`);
  },
};

const { name, age } = obj;

console.log(name, age);

obj.say();
