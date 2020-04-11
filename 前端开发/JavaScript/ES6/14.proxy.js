// 代理

const proxy = new Proxy(
    { x: 1 },
    {
        get: function(target, propkey, receiver) {
            // target: 目标对象 即上面的{x:1}对象
            // propkey： 目标属性值  如上面的x
            // receiver:
            // return receiver;
            return '拦截读取值';
        }
    }
);

console.log(proxy.time);

const proxy1 = new Proxy(
    {},
    {
        get: function() {
            return '固定返回内容';
        }
    }
);

console.log(proxy1.name); // 访问proxy1这个对象的任意属性都会得到这个结果

const obj = Object.create(proxy);

console.log(obj.time);

// ================   观察者模式   ================

const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, { set });

function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach(observer => observer());
    return result;
}

const person = observable({
    name: '张三',
    age: 20
});

function print() {
    console.log(`${person.name}, ${person.age}`);
}

observe(print);
person.name = '李四'; // 修改值的时候自动调用了其它方法， 这个类似与Vue的响应式更新
