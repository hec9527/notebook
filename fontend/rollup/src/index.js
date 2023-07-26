import { version } from '../package.json';
// import Student from './student';

const add = (x, y) => x + y;

const reduce = (x, y) => x - y;

console.log(add(1, 2));
console.log(add(2, 4));
console.log(reduce(4, 2));

// const stu = new Student('张三', 24, 5109221995);

console.log(stu);

console.log('version', version);

// console.log({ pkg });

import('./student').then(res => console.log(new res.default()));

export default 1;
