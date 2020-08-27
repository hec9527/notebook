const num = 1;
const bool = false;
const str = 'hello word';
const arr = [1, 2, 3, 4];
const obj = { x: 1, y: 2 };
const nul = null;
const udefined = undefined;

function add(x, y) {
    return x + y;
}

class A {
    constructor() {
        this.time = new Date().toLocaleString();
    }
}

export { num, bool, str, arr, obj, nul, udefined, add };
