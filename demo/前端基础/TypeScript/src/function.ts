// 基本函数注解
function add(x: number, y: number): number {
    return x + y;
}

// 可选参数注解
function add1(x: number, y: number, z?: number): number {
    return z ? x + y + z : x + y;
}
// 默认参数
function add2(x: number, y: number, z = 2): number {
    return x + y + z;
}

console.log('\n\n\n', '='.repeat(10), '函数', '='.repeat(10));
console.log('可选参数', add1(1, 2, 3));
console.log('可选参数', add1(1, 2));
console.log('默认参数', add2(1, 2, 3));
console.log('默认参数', add2(1, 2));

// 剩余参数
function resetArgument(name: string, age: number, ...reset: string[]) {
    console.log('arguments:', arguments);
    console.log('剩余参数:', ...reset);
}
console.log('无限参数');
resetArgument('张三', 22, '家里蹲大学毕业', '嘴强王者');
