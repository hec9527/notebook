function* getRange(min, max) {
    let index = min;
    while (index < max) {
        yield -index;
        yield index++; // 每次只执行到一个 yield或者return
    }
}

let to100 = getRange(1, 100);

console.log(to100);
console.log(to100.next());
console.log(to100.next());
console.log(to100.next());
console.log(to100.next());

console.log('------');

for (let key of to100) {
    console.log(key);
}

console.log(to100.next());

to100 = getRange(1, 101);
let arr = [...to100];
console.log(arr);
