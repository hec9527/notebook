export default {};

function Curry(x: number) {
  let res = x;
  const add = (y: number) => {
    res += y;
    return add;
  };

  add.valueOf = () => res;

  add.toString = () => `${res}`;

  return add;
}

console.log(+Curry(1)(2)(3)(4)(5)(6)(7)(8)(9)(10));

function currie(a: number) {
  return function (b: number) {
    return function (c: number) {
      return a + b + c;
    };
  };
}
console.log(currie(1)(2)(3)); // 6
