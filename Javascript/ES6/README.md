# ES6

- ES6 是指ES2015以及之后的Javascript规范
- 从2015起，ES规范为，ES+ 年限。eg: ES 2019

## let 、 const

- let、const 定义的变量属于局部作用域，可以嵌套使用
- let、const 定义的变量存在**暂时性死区**，即声明之前访问会报错
- let、const 在全局作用域当中定义的变量**不**属于全局对象，var在全局定义的变量**属于**全局对象的属性
- let、const 声明的变量不能重复声明-- 编译错误
- let 定义的变量可以修改、const 定义的变量不可以修改
- 在代码块中声明函数，有些运行环境会报错，有些会自动提升到全局 -- 预编译函数整体提升
- ES6中变量声明有6中方法：`var`、`let`、`const`、`function`、`import`、`class`

## 变量解构

- 基本语法 `let [var1, var2, , var4, var5 = '5'] = [1, 2, 3, 4]`
- 当等号右边变量不可遍历、不具备iterator接口、包装类之后不可遍历则解构失败
- 解构使用严格判断`===` 如果解构的值本身为`undefined`则启用默认值，没有则为`undefined`
- 数组解构，只需要将对象变量放在对应位置，不需要的可以不用填，也可以给每个变量设置默认值
- 数组解构，`let [a, ...b] = [1, 2, 3, 4]` 可以将后续的所有变量存放在一个变量里面
- 对象解构，解构的变量名为对象的属性名，可以起别名，可以给定默认值 `let {name: n = 'tom'} = {name: 'tony'}`
- 类数组、字符串也可以使用解构，当作数组处理

## 字符串

- 码点中加入大括号，之前只能识别`\u0000 ~ \uffff`的码点，现在可以使用大括号识别超过`\uffff`的码点了， eg:`\u20BB7`
- 新增遍历器接口，可以使用`for of`遍历， 同时也能识别超过`\uffff`的码点
- 模板字符串，可以添加变量、可以跨行输出``
- 标签模板，可以自定义字符串的解析方式，在处理函数当中  第一个参数为以参数分割的原字符串数组，之后的参数为模板字符串中的参数

```js
    let total = 30;
    let msg = passthru`The total is ${total} (${total * 1.05} with tax)`;
    function passthru(literals, value1, value2) {
        let result = '';
        let i = 0;
        while (i < literals.length) {
            result += literals[i++];
            if (i < arguments.length) {
                result += arguments[i];
            }
        }
        return result;
    }  
    console.log(msg);   // The total is 30 (31.5 with tax)
```

## 数组新增

- flat 拉平数组
  - 参数如果为1则拉平1层数组，如果参数为 ininfinity 则拉平所有

## 对象

- 属性简写

- 方法简写

- 属性名表达式

- 对象属性描述符
  - Object.getOwnPropertyDescriptor(obj, prop)

## 正则表达式

- 定义正则表达式可以有2中方式
  - 第一种正则字面量`let exp = /^hello.*orld$/ig`
  - 第二种构造函数`let exp = new RegExp(str[, pattern])`
    - 第一个参数为正则字符串或者正则字面量，第二个参数可选
    - 当第一个参数是正则字面量的时候，如果存在第二个参数将忽略正则字面量中的修饰符
- 字符串对象有4中方法可以使用正则表达式
  - match()
  - replace()
  - search()
  - split()

## 属性描述符

- 忽略`可枚举属性`=`false`的操作
  - `for ... in`    --- 只有该操作会遍历继承的属性，以下操作会忽略
  - `Object.keys()`
  - `JSON.stringify()`
  - `Object.assign`

## spuer 关键字

- 指向当前对象的原型对象

## Symbol 类型

- 可以使用中文描述信息

- 每个Symbol属性都是独一无二的（新建一个相同描述信息的symbol也不相等）

- 设置Symbol属性需要使用[]，否则实际设置的为一个字符串

- 常规方法不能获取到Symbol的值，以下方式可以
  - `Object.getOwnPropertySymbols()`
  - `Reflect.ownKeys()`  可以获取所有类型的键名，包括常规的和Symbol
  - 因为常规方式都无法获取Symbol属性，可以使用Symbol属性模拟对象内部的私有属性

- `Symbol.for(描述信息)`可以查找对象上是否包含某一个Symbol值，有就返回并且重用它，没有就新建一个

## Generator函数

- 函数名和`function`关键字之间添加`*`标识，并且内部使用`yield`

- 函数返回一个遍历器对象`Iterator`，可以使用`for...of`遍历

## Iterator 迭代器

- 作用
  - 统一的遍历接口
  - 数据结构的成员可以按指定顺序排列
  - `for ... of`循环消费iterator

- 实现方式
  - 创建一个临时指针，指向数据结构的开始，每次调用`next`方法指向下一个成员
  - 内置遍历器每次严格返回一个对象`{ value: value, done: boolen}`，value为返回的值，done表示是否还有

- 对象包含`[Symbol.iterator]`属性或者他的原型上包含这个属性，那么这个对象就是可以遍历的

```JavaScript
    const obj = {
    x: 1,
    [Symbol.iterator]: function() {
        let i = 0;
        return {
            next: () => (i <= 10 ? { value: i++ } : { done: true })
            };
        }
    };
    // 以上代码，重写了obj对象的遍历函数，使用for of 遍历该对象的时候，固定遍历 0-10
    // 遍历器必须部署在对象的 [Symbol.iterator] 属性上
```

- 如果需要中途退出遍历，则需要部署`return`方法，一般在出错或者`break`语句

- 实现了 Iterator 迭代器的的类数组，都可以结构方式转换为数组
  - `const arr = [ ...arrlike ]`
  - 常见的类数组，arguments、Nodelist

## Set

- set类似于数组，但是成员唯一

- new Set(arr | arrLike) 用于创建新的set  实际上任何实现了Iterator接口的对象都可以

- 内置方法
  - size 返回成员的总数
  - add 添加一个值，返回set本身
  - delete 删除一个值，返回boolen表示是否删除成功
  - has 查看某一个值是否在set中，返回boolen
  - clear 清空set，没有返回值

- 遍历
  - keys()  返回可迭代对象
  - values()  返回可迭代对象   等效于`for of`
  - entries()  返回可迭代对象
  - forEach  高阶函数，回调参数和数组一样，但是value===index

- 与数组互转
  - 使用`[...set]`可以很容易的完成集合的并集、交集、差集

## WeakSet

- WeakSet 基础用法和Set基本相同， 但是WeakSet当中只能添加对象

- **WeakSet 不可遍历**

- WeakSet 中的对象是弱引用，如果对象的外部引用为0则GC回收，WeakSet 不包含引用计数

- 内置方法
  - add
  - delete
  - has

## Map

- 传统Object对象只能包含简直对，同时键只能是字符串，Map可以使用 JavaScript 中的7中基础数据类型作为键名

- 内置方法
  - 基础方法
    - set
    - get
    - has
    - delete
    - clear
  - 遍历方法  遍历顺序就是插入顺序
    - keys
    - values
    - entries  默认遍历属性 `for of`
    - forEach

- 类型转换
  - 转为数组  
    - `[...map.keys()]`
    - `[...map.values]`
    - `[...map.entries]` 二维数组
    - 数组转map 将二维数组传入 Map的构造函数
  - 转为对象
    - 遍历Map然后逐个添加属性到对象 但是如果map的键为非字符串的时候需要转为字符串

## WeakMap

- 类似于Map 但是只能使用对象作为键名，除null
- 没有遍历方式，只有
  - add
  - delete
  - has
  - clear

## proxy

- 描述：Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”，即对编程语言进行编程

- 创建代理

```JavaScript
const proxy = new Proxy(
    {},
    {
        get: function() {
            return '固定返回内容';
        }
    }
);
```

- 代理可以在之行某些操作的时候，修改其默认行为

- 支持的拦截操作
  - `get(target, propKey, receiver)` ： 拦截对象属性的读取，比如`proxy.foo`和`proxy['foo']`
  - `set(target, propKey, value, receiver)` ： 拦截对象属性的设置，比如`proxy.foo = v`或`proxy['foo'] = v`，返回一个布尔值
  - `has(target, propKey)` ： 拦截`propKey in proxy`的操作，返回一个布尔值
  - `deleteProperty(target, propKey)` ： 拦截`delete proxy[propKey]`的操作，返回一个布尔值
  - `ownKeys(target)` ： 拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组
  - `getOwnPropertyDescriptor(target, propKey)` ： 拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象
  - `defineProperty(target, propKey, propDesc)` ： 拦截`Object.defineProperty(proxy, propKey, propDesc`、`Object.defineProperties(proxy, propDescs)`，返回一个布尔值
  - `preventExtensions(target)` ： 拦截`Object.preventExtensions(proxy)`，返回一个布尔值
  - `getPrototypeOf(target)` ： 拦截`Object.getPrototypeOf(proxy)`，返回一个对象
  - `isExtensible(target)` ： 拦截`Object.isExtensible(proxy)`，返回一个布尔值
  - `setPrototypeOf(target, proto)` ： 拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
  - `apply(target, object, args)` ： 拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`
  - `construct(target, args)` ： 拦截 Proxy 实例作为构造函数调用的操作，比如`new proxy(...args)`

## Reflect 反射

- 作用
  - 将一些语言内部的功能从Object移动到 Reflect
  - 修改某些方法使其变得合理

- 静态方法
  - Reflect.apply(target, thisArg, args)
    - 对应 `Function.prototype.apply.call(func,thisObj,args)`
  - Reflect.construct(target, args)
    - 等同于 `new target(...args)`
  - Reflect.get(target, name, receiver)
    - 查找target上面的name属性，如果不存在则返回`undefined`，如果属性存在取值函数，则取值函数`this`绑定`receiver`
  - Reflect.set(target, name, value, receiver)
    - `target.name = value`, 如果属性存在赋值属函数，则赋值函数 `this`绑定`receiver`
  - Reflect.defineProperty(target, name, desc)
    - 对应 `Object.defineProperty(obj.prop.desc)`
  - Reflect.deleteProperty(target, name)
    - 对应 `delete obj.prop`
  - Reflect.has(target, name)
    - 对应 `prop in obj`
  - Reflect.ownKeys(target)
    - 对应 `Object.getOwnPropertyNames`与`Object.getOwnPropertySymbols`之和
  - Reflect.isExtensible(target)
    - 对应 `Object.isExtensible(obj)`
  - Reflect.preventExtensions(target)
    - 对应 `Object.preventExtensions(obj)` 让一个对象变成不可扩展，返回boolen表示操作时候成功
  - Reflect.getOwnPropertyDescriptor(target, name)
    - 对用 `Object.getOwnPropertyDescriptor(obj,prop)`
  - Reflect.getPrototypeOf(target)
    - 对应 `Object.getPrototypeOf(obj)`
  - Reflect.setPrototypeOf(target, prototype)
    - 对应 `Object.setPrototypeOf(obj,proto)`

## Promise

- 返回的Promise回调包含
  - then(resolve, reject)
  - catch(res =>{})
  - catch 等效于 then(null/undefined, res=>{})
  - finally 无论成功或者失败都会执行

- `Promise.all([p1,p2,p3])`
  - 参数不一定是数组，但是需要实现iterator接口并且每个参数返回Promise对象
  - 返回一个Promise，只有所有的子promise 都返回resolve才执行resolve，任何一个返回reject都执行reject
  - 子Promise触发了 catch 则不会触发外部Promise的 catch

- `Promise.race([p1, p2, p3, p4])`
  - 类似与all方法，但是只要子Promise中有一个状态改变，则外部Promise的状态也改变

- `Promise.allSettled([p1,p2,p3,p4])`
  - 以上的所有Promise都结束时（不论是resolve还是reject）都执行resolve

- `Promise.any([p1,p2,p3,p4])`
  - 只要有一个子Promise成功resolve，则执行resolve

- `Promise.resolve()`
  - 将现有对象转为Promise对象
  - 转换规则
    - Promise 对象，直接返回
    - 对象具有 then 方法，则转为Promise对象，并且立即执行then方法
    - 不具备 then 方法或者不是对象，则新建一个Promise对象，立即执行resolve方法
    - 不带参数 直接返回resolve状态的Promise对象

- `Promise.resolve()`
  - 将现有对象转换为Promise对象
  - 其参数为reject的理由,即 回调参数

## `async`函数

- 函数返会promise对象，return返回的值，异步成功的值，发生错误throw的值，为异步失败的值

```JavaScript
async function foo(){
    return await fetch('xxxx.do');
}

foo().then(res=>{})
```

## class

- 每个类都必须有构造函数 `constructor`

- 子类的构造函数中必须先调用`super()`才能使用`this`，即先初始话一个空this然后让父类刻画，然后自己在继续刻画

- 在子类中使用`super.fatherFunction`，调用的函数中的this，指向子类实例

- 容易混淆的地方
  - `__proto__`属性是存在与`JavaScript对象`上面的原型对象
  - `Prototype`属性是存在于`类/构造函数`上面的原型对象
  - 一个构造函数A生成的实例a，则有 `A.prototype === a.__proto__`，他们是同一个属性，只是不同的属性名
  - `prototype`对象包含一个`constructor`指向当前的构造函数或者类，
  - `prototype`对象包含一个`__proto__`指向当前对象/构造函数/类的原型--->`prototype`
  - 类的`__proto__`作为语法糖，`A.__proto__!==A.prototype`，而指向他的继承类如B类继承自A类，则`B.__proto__===A`
  - 如果一个类没有继承自其它类，则有`A.__proto__===[native code]`
  - ES5不能继承原生的构造函数，如：array，但是ES6的class语法可以继承

## 模块化

- ES5模块化加载方案
  - CommonJS： 用于服务器
  - AMD： 用于浏览器
  
- ES6模块化自动使用严格模式
  - 变量必须声明后再使用
  - 函数的参数不能有同名属性，否则报错
  - 不能使用with语句
  - 不能对只读属性赋值，否则报错
  - 不能使用前缀 0 表示八进制数，否则报错
  - 不能删除不可删除的属性，否则报错
  - 不能删除变量`delete prop`，会报错，只能删除属性`delete global[prop]`
  - eval不会在它的外层作用域引入变量
  - eval和arguments不能被重新赋值
  - arguments不会自动反映函数参数的变化
  - 不能使用`arguments.callee`
  - 不能使用`arguments.caller`
  - 禁止this指向全局对象
  - 不能使用fn.caller和fn.arguments获取函数调用的堆栈
  - 增加了保留字（比如p`rotected`、`static`和`interface`）
  
- 模块的导出，应该导出一个接口，不能直接输出变量值

- 导出的变量可以使用as 重命名，同理导入的变量也可以使用as重命名

- ES2020引入`import()`函数，支持动态加载（异步加载）

- 模块加载
  - 在浏览器中加载
    - 异步加载
      - defer：异步加载，完成之后也需要等页面渲染完成才能执行
      - async：异步加载，加载完成之后立即执行，多个async不能保证加载顺序
    - 在浏览器中需要在`script`标签上添加`type='module`，所有模块默认异步defer加载，可以手动设置成async加载
    - 在顶层的代码中`this===undefined`，可以使用这个来检测是否在ES6 mdule模式下运行
  - 在nodejs中加载
    - Nodejs有自己的模块加载方式CommonJS
    - 使用ES6模块加载方式(一下方式二选一)
      - 将文件后缀修改为`.mjs`
      - 在`package.json`添加字段`"type": "module"`
      - `type`默认为`commonjs`，`.js`解析为commonJS模块，修改为`module`之后，`.js`文件被解析为`ES6模块`,`commonJS`模块需要修改后缀为`.cjs`
    - **在NodeJs中加载存在某些问题**
