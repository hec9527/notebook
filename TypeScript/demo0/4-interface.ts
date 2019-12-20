// 定义接口
interface Person {
    name: string;
    age: number;
    addr: string;
}

const p = {
    name: 'xxx',
    age: 22,
    addr: 'xxxx'
};

/**
 * typescript 中如果一个变量的包含接口中定义的所有属性则认为这个变量是这个接口的实例
 */
function foo(person: Person) {
    console.log(person);
}

foo(p);
