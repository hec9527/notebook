// import './type.ts';
// import './Interface.ts';
// import './class.ts';
// import './function.ts';
// import './namespace.ts';

// interface User {
//   type: 'user';
//   name: string;
//   age: number;
//   occupation: string;
// }

// interface Admin {
//   type: 'admin';
//   name: string;
//   age: number;
//   role: string;
// }

// // type A = {
// //   [K in keyof User | T in keyof Admin]: any;
// //   // [T in keyof User]: any;
// // };

// type B = Admin | User;

// let p: B = {
//   name: '1',
//   age: 21,
//   type: 'user',
//   occupation: `as`,
// };

function foo(str: string, cb?: () => void) {
  console.log(str);
  cb?.();
}

foo('hello world', () => {
  console.log('ok');
});
