let set = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 6]);

console.log(set); // Set { 1, 2, 3, 4, 5, 6 }

set.add(1);
set.add(10);

console.log(set); // Set { 1, 2, 3, 4, 5, 6, 10 }

// ------------- Map  ----------------

let m = new Map([
    [1, 1],
    [1, 1]
]);

console.log(m); // Map { 1 => 1, 2 => 2, 3 => 3, 4 => 4 }

m.set('s', 'hello');

m.set(false, 'xxx');

m.set(undefined, 'asdsd');

m.set(null, 'asdr');

m.set(Symbol('Symbol Type'), 'Symbol value');

m.set({}, 'object');

console.log(m, m.size);

for (let x of m) {
    console.log(x);
}

console.log('---------');

// 不能直接套用数组的遍历方式
// Array.prototype.forEach.call(m, (value, index, arr) => {
//     console.log(value, index, arr);
// });
