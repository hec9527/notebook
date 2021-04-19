# JavaScript 中的原型&原型链

MDN 中关于原型和原型链的定义

> JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。 ---- MDN

JavaScript 虽然也是面向对象编程语言（OOP），但是与传统的面向对象有很大的不同。传统编程语言中的很多概念比如说类、构造函数、多肽、继承、静态方法等在 ES6 之前都没有，在 ES6 中填补了这部分的空缺，这也为 JavaScript 这门语言注入了新的活力，但是 ES6 中关于类与继承的实现，实际上只是 ES5 中原型与原型链的语法糖，所以想要深入了解 ES6 中的类与继承，学习理解原型和原型链还是很有必要的

## 类与构造函数

下面的示例定义了一个类，让我们通过这段代码来了解原型和构造函数，运行下面的代码，可以打印出 people 的信息

```JavaScript
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayInfo() {
    console.log('hello, my name is:' + this.name + ', age is:' + this.age);
  }
}
const people = new People('saga', 34);
people.sayInfo();
```

上面是 ES6 的实现，下面我们使用 ES5 的语法来实现这个功能。运行下面这段代码可以发现，他们的效果是一样的，这是因为在 ES5 中，使用 new 调用的函数为构造函数，函数中的 this 指向创建的新的对象，如果函数没有指定返回的对象，则默认返回 this。这里有一个约定俗成的规范，构造函数使用大驼峰命名法。

```javascript
function People(name, age) {
  this.name = name;
  this.age = age;
  this.sayInfo = function () {
    console.log('hello, my name is: ' + this.name + ', age is:' + this.age);
  };
}
var people = new People('alice', 32);
people.sayInfo();
```

但是仔细分析这段代码我们会发现，每次创建实例的时候 sayInfo 都是创建了一个新的函数，但是不论创建多少个对象，它们的 sayInfo 方法效果都是一样的。这样是非常浪费内存的，不符合复用的思想。

```js
var alice = new People('alice', 32);
var julian = new People('julian', 25);
console.log(alice.sayInfo === julian.sayInfo); // false
```

这个时候我们就需要请出今天的主角了原型(prototype)。JavaScript 的继承是基于原型的，我们可以将 People 的 sayInfo 方法放到原型上面，原型上面的方法，所有实例共享

```js
// ES5原型demo
function People(name, age) {
  this.name = name;
  this.age = age;
}
People.prototype.sayInfo = function () {
  console.log('hello, my name is: ' + this.name + ', age is:' + this.age);
};
// 现在让我们再来检测一下 sayInfo 是否被所有的 People 实例共享
var alice = new People('alice', 32);
var julian = new People('julian', 25);
console.log(alice.sayInfo === julian.sayInfo); // true
```

上面的案例中，我们用到了 prototype 这个属性，让我们来打印看一下这 prototype 究竟是何方神圣

```js
console.log(People.prototype);
// 如果是在node环境中可以看到结果是（）  node -v 12.21.0
// People { sayInfo: [Function] }
// 如果是浏览器环境中，还有constructor(构造函数)和__proto__(原型)   // chrome 89.0
```

不同宿主环境有不同的实现，这里我们以浏览器中的结果为准，方便后续理解。

浏览器中 People 的原型对象上面有一个 sayInfo 方法，被 People 的所有实例共享，此外还有一个 constructor 属性，指向了构造函数 People，同时有一个`__proto__`（前后两个下划线，非标准属性在部分浏览器中可用），指向了这个原型对象的原型对象，即 Object 对象。 到这里就很清晰了，JavaScript 中，原型是一个对象，所有对象（除了 Object 和通过 Object.create(null)创建的对象）通过一个内部属性`__proto__`指向它的原型，同时因为原型也是一个对象，原型对象也通过`__proto__`指向它的原型，直到 Object。这种嵌套的`__proto__`逐步从一个对象指向 Object 的链式指向就是原型链
