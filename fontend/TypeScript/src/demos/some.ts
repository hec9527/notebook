// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// nums.some(num => {
//   console.log(num);
//   if (num === 5) {
//     return true;
//   }
// });

interface Array<T> {
  profillSome(callback: (item: T, index: number, arr: this) => any): void;
}

Array.prototype.profillSome = function (callback) {
  for (let i = 0, len = this.length; i < len; i++) {
    if (!!callback(this[i], i, this)) {
      break;
    }
  }
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.profillSome(num => {
  console.log(num);
  if (num === 5) {
    return true;
  }
});
