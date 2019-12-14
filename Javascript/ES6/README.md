# ES6 

- ES6 是指ES2015以及之后的Javascript规范
- 从2015起，ES规范为，ES+ 年限。eg: ES 2019


# let 、 const 

- let、const 定义的变量属于局部作用域，可以嵌套使用
- let、const 定义的变量存在**暂时性死区**，即声明之前访问会报错
- let、const 在全局作用域当中定义的变量**不**属于全局对象，var在全局定义的变量**属于**全局对象的属性
- let、const 声明的变量不能重复声明-- 编译错误
- let 定义的变量可以修改、const 定义的变量不可以修改
- 在代码块中声明函数，有些运行环境会报错，有些会自动提升到全局 -- 预编译函数整体提升
- ES6中变量声明有6中方法：`var`、`let`、`const`、`function`、`import`、`class`



# 变量解构

- 基本语法 `let [var1, var2, , var4, var5 = '5'] = [1, 2, 3, 4]`
- 当等号右边变量不可遍历、不具备iterator接口、包装类之后不可遍历则解构失败
- 解构使用严格判断`===` 如果解构的值本身为`undefined`则启用默认值，没有则为`undefined`
- 数组解构，只需要将对象变量放在对应位置，不需要的可以不用填，也可以给每个变量设置默认值
- 数组解构，`let [a, ...b] = [1, 2, 3, 4]` 可以将后续的所有变量存放在一个变量里面
- 对象解构，解构的变量名为对象的属性名，可以起别名，可以给定默认值 `let {name: n = 'tom'} = {name: 'tony'}`
- 类数组、字符串也可以使用解构，当作数组处理




# 字符串

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



# 正则表达式

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














