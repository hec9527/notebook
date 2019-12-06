# 数据类型

## 变量声明

* 使用`var`,`let`,`const`申明的变量不可以使用`delete`运算符删除，同时`delete`运算发也不能删除继承属性
* `let`,`const`具有局部作用域
* `let`申明的变量不可重复申明
* `const`申明的变量不可修改
* 使用析构的时候`=`左边应该是申明变量，即便使用已经申明的变量依然会报错



## JavaScript中的数据类型

### 数据类型分类

- 原始数据类型（数字、字符串、布尔值、null，undefined）
- 对象数据类型（对象，函数、数组也是一种对象）

***null、undefined都无法拥有任何方法***

### 内置类
- Math类
- Date类
- 正则类
- 错误类

### 数据类型
- String
- Number
- Boolean
- null
- undefined
- object
- symbol (ES6新增)

### 数字类型 Number

| 属性和方法           | 说明                                                                                                             |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Number.NaN           | 是一个特殊的值，它的特点是和任何值都不相等，包括自生                                                             |
| Number.isNaN         | 用于判断一个值是不是NaN，或者非数字                                                                              |
| Number.isFinite      | 用于判断一个值是不是 ±infinity、NaN                                                                              |
| Number.Max_VALUE     | 获取当前系统最大值                                                                                               |
| Number.toFixed       | 给定数字转字符串的小数点后位数                                                                                   |
| Number.toExponential | 使用指数计数法将数字转变为字符串，参数为小数点后的位数                                                           |
| Number.toPrecision   | 根据给定的有效数字位数将数字转换为字符串                                                                         |
| parseInt             | 第一个参数是要转换的字符串或者数字，第二个参数可选，为转换的基数，即第一个参数应当使用什么基数来处理，范围(2-36) |

### 日期 Date

| 属性和方法    | 说明                                     |
| ------------- | ---------------------------------------- |
| Date.getMonth | 获取月份，0-11，所以结果需要+1           |
| Date.getDay   | 当前日期星期几，0-6，0周日，1周一，6周六 |

### 字符串 String
***字符串可以使用方括号的方式访问指定索引的值而不仅仅是`charAt`函数，但是字符串不能向`python`中的字符串一样分片，字符串分片需要使用`slice`函数***

##### ES5方法（非全部）
| 属性和方法          | 说明                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| String.charAt       | 获取指定索引的字符，不存在则返回''                                                                    |
| String.charCodeAt   | 获取指定索引的字符的ASCII码，为空则返回NaN                                                            |
| String.substr       | 第一个参数为截取的起始位置，第二个参数为截取的长度                                                    |
| String.substring    | 第一个参数为截取的起始位置，第二个参数为截取的截至位置，不包括截至位置                                |
| String.slice        | 同substring，但是这里允许使用负数作为参数，负数代表从末尾开始计数，但是substring使用负数则自动转换为0 |
| String.search       | 查找字符串中第一次出现字串的位置，如果不存在则返回-1                                                  |
| String.match        | 搭配正则使用，参数为一个正则或者字符串，使用`/`g全局匹配                                              |
| String.replace      | 第一个参数为需要匹配的字符串也可以是正则表达式，第二个参数是需要替换的内容                            |
| String.fromCharCode | 用于获取`unicode`编码码点的字符，但是不能识别大于`0xFFFF`的字符，超出舍弃高位                         |

***以上方法都不会改变字符串本身而是返回一个子字符串***

##### ES6新增
| 属性和方法           | 说明                                                                               |
| -------------------- | ---------------------------------------------------------------------------------- |
| String.fromCodePoint | 用于弥补`String.fromCharCode`的不足                                                |
| String.codePointAt   | 用于获取四个字节的字符的字节码                                                     |
| String.row           | 将转义字符逆向操作`\`变成`\\`，一般用于处理模板字符串                              |
| String.normalize     | 用于将字符串不同的表示方式转换为统一的方式                                         |
| String.inCludes      | 返回bool值，字符串是否存在指定的字串                                               |
| String.startswith    | 返回bool值，字符串是否以指定字符串开始                                             |
| String.endsWith      | 返回bool值，字符串是否以指定字符串结束，这三个方法都可以接受第二个参数表示开始位置 |
| String.repreat       | 将字符串重复指定次数，返回字串                                                     |
| String.padStart      | 第一个参数表示字符串长度，第二个参数为长度不足时在前面补充的字符，默认为空格       |
| String.padEnd        | 第一个参数表示字符串长度，第二个参数为长度不足时在后面补充的字符，默认为空格       |
| String.trim          | 消除字符串首尾的空格  (ES2019新增)                                                 |
| String.trimStart     | 消除字符串首部空格，别名`trimLeft`                                                 |
| String,trimEnd       | 消除字符串尾部空格，别名`trimRight`                                                |

实例方法：
matchAll() 返回一个正则表达式在当前字符串中匹配的字符

### 正则表达式 RegExp

两条 `/` 之间构成了正则表达式直接量，第二条斜线之后可以跟一个或者多个字母，用来修饰匹配模式

### 布尔值 Boolean 

转换为`false`的值，除了以下的值全部都转换为`true`
- undefined
- null
- 0
- -0
- NaN
- ''  //空字符串



## 数组
***数组初始化后默认值为`empty`而不是`undefinded`，没有赋值的稀疏数组都是`empty`***
 
***数组的特别之处在于，使用小于2^32的非负整数作为属性名的时候，数组会自动维护其`length`属性***

* 操作数组本身的方法
  * arr.reverse()
  * arr.sort()
  * arr.splice(begin,len.item)  
  * arr.push()
  * arr.pop()
  * arr.shift()
  * arr.unshift()
  * arr.fill(number,beg,end)
  * arr.indexOf()
  * arr.lastIndexOf()

* 返回新数组的方法
  * concat()     // 不会扁平化数组，而是插入数组本身
  * slise(beg,end)      // 返回数组的切片
  * toString()
  * toLocaStrong()      // 扁平化处理数组并且调用`toString()`

* arr.sort()
  * 需要一个函数或者`undefind`即不用传值
    当为`undefiend`时，数组按照字符串排序方式排列 即 `1 < 11 < 2 < 23 < 4`。按照字符的Unicode位点进行排序
    当传入的参数为一个会调函数的时候，回调函数有两个变量，即`a`,`b`（这里的a,b）随便起的名字，可以是任意合法变量名，如果回调函数返回值小于0，那么a会被排在前面，获取返回值大于0，则b会被排列在前面  
    ```javascript
        arr.sort((a,b)=>{
            return a-b   // 从小打到排列，如果b-a则从大到小排列
        })
    ```

### null 和 undefined 

typeof null  =>  object

typeof undefined  => undefined    // 这不是一个关键字



## 类型转换

| 值                     | 字符串               | 数字            | 布尔值 | 对象                  |
| ---------------------- | -------------------- | --------------- | ------ | --------------------- |
| undefined              | 'undefined'          | 0               | false  | TypeError             |
| null                   | "null"               | 0               | false  | TypeError             |
| true                   | "true"               | 1               |        | new Boolean(true)     |
| false                  | "false"              | 0               |        | new Boolean(false)    |
| ""(空字符串)           |                      | 0               | false  | new String("")        |
| "1.2"(非空数字)        |                      | 1.2             | true   | new String("1.2")     |
| "one"(非空非数字)      |                      | NaN             | true   | new String("one")     |
| 0                      | "0"                  |                 | false  | new Number(0)         |
| -0                     | "0"                  |                 | false  | new Number(-0)        |
| NaN                    | "NaN"                |                 | false  | new Number(NaN)       |
| Infinity               | "Infinity"           |                 | true   | new Number(Infinity)  |
| -Infinity              | "-Infinity"          |                 | true   | new Number(-Infinity) |
| 1 (无穷大、非零)       | "1"                  |                 | true   | new Number(1)         |
| {} (任意对象)          | 自身toString方法     | 自身valueOf方法 | true   |
| `[]`(任意数组)         | ""                   | 0               | true   |
| `[9]`(一个数组元素)    | "9"                  | 9               | true   |
| `['a']`(其他数组)      | 调用数组join方法     | NaN             | true   |
| function(){}(任意函数) | 调用自生toString方法 | NaN             | trueF  |

***节选自《Javacript权威指南》***



##　特殊方法

* **toString**: 内置对象都有自己的`tostring`方法，如果自定义对象想要使用`tostring`方法需要自己实现，否则使用`object`的`tostring`方法
* **valueOf**: `valueOf`方法返回对象本身
  * Date 对象的`valueOf`方法，返回时间戳



## 遍历
**遍历：遍历对象的所有可枚举类型` nonenumerable `**

* 数组的遍历方式有`for`,`for in `,`forEach`。使用`for in`遍历数组，在遍历的过程中，删除了还没有遍历的属性，那么这个属性将不再会被遍历到,同时`for in`的遍历顺序为定义的先后顺序




# 类数组
* ***类数组本身是一个对象，只不过它实现或者继承了数组的`push`方法后，会自动维护数组的长度以及使用索引访问元素***
* ***最常见的类数组：`arguments`***




# 函数

## 特殊函数

* **构造函数**： 构造函数返回一个对象，如果显式返回一个不是函数生成的对象，则函数生成的对象被丢弃，如果手动返回一个值类型，则自动返回一个对象

* **object.definePropety(obj,prop,desciptor)**
  * obj: 需要设置属性的对象
  * prop：给对象添加的属性
  * desciptor: 描述符
    * configurable: 当值为`true`时，该属性的描述符才可以更改，默认为`false`，同时属性也才能从对象上面删除
    * enumerable: 当值为`true`时，该属性才能被枚举，默认为`false`
    * value: 属性的值，该值可以是任意的JavaScript值，默认为`undefiend`
    * writable:当值为`true`时，value的值才能被赋值运算改变，默认为`false`
    * get: 如果没有`getter`则为`undefined`，当访问该属性的时候，该方法执行
    * set：如果没有`setter`则为`undefined`，当修改属性的值的时候会指定该方法

* **Object.definePropeties(obj,obj)
  * 第一个参数为需要定义属性的对象
  * 第二个参数为对象定义的属性的键值对集合
  * demo
``` JavaScript
    object.definePropeties({},{
        x:{value:1,writable:true,enumerable:true,configurable:true}
        y:{value:2,writable:false,enumerable:false,configurable:false}
        z:{value:1,writable:true,enumerable:false,configurable:true}
    })
```

* **Object.keys(obj)** 
  * 来自`Object`函数的静态方法，传入一个对象，可以返回这个对象的所有可枚举对象，例如`localstorage.keys`
  
* **obj.hasOwnProperty()**
  * 用于检测给定的名字是否是对象的自有熟悉

* **obj.propertyIsEnumerable()**
  * 检测一个属性是否是自有属性且可枚举
  
* **Object.getOwnPropertyDescriptor(obj,prop)**
  * 用于检测对象自有属性的属性描述符

* **getPrototypeOf()**
  * 用于遍历对象原型
  
* **Object.seal()**
  * 传入一个对象，封闭这个对象，阻止其添加新的方法，并且属性描述符改为不可配置，现有属性根据之前配置是否可以更改

* **Object.isExtensible()**
  * 传入一个对象，检测对象是否可以配置（是否可以新增属性）

* **Object.forzen()**
  * 传入一个对象， 将这个对象所有属性设置为只可读，不可写，并且 不能新增属性

* **call()/apply()**
  * 两个方法用于改变`this`指向 
  * `call`的第一个参数是用于改变`this`的对象，后面是参数列表
  * `apply`第一个参数是用于改变`this`的对象，后面是参数数组
```javascript
    function Foo(name,age){
        this.name=name;
        this.age=age
    }
    const obj = {}
    Foo.call(obj,"name",12")
    Foo.apply(obj,["name",12])
```


## 箭头函数 
* 箭头函数的this指向: 箭头函数没有函数作用域，所以this指向外部，但是在对象内，this指向的也不一定是对象也可能是window
* 参数一个的时候可以省略圆括号 
* 语句只有一句的时候可以省略花括号并且自动返回
* 没有`arguments`属性,这一点最不像函数

### 数组高阶函数 
**高阶函数：传入的参数为函数的函数**

* forEach
```javascript
   arr.forEach((value,index,arr)=>{
    // do something
   })
```

* map
**注意map的回调函数需要有return语句，如果只有一条语句可以声乐return，map结果需要存入一个变量。**
```javascript
    arr1 = arr.map((value,index,arr)=>{return value * value})
```

* filter
**以下demo返回值大于3的结果的数组，如果一条语句可以省略return**
```javascript
    arr1 = arr.filter((value,index,arr)=>{
        return value>3
    })
```

* every
**对数组中的每一个元素进行判定，当所有的元素都返回true才返回true，尽早终止遍历**
```javascript
    arr.every((value,index,arr)=> value < 100 )
```

* some 
**数组中所有元素都返回false才返回false，只要有一个返回true就返回true，尽早终止遍历**
```javascript
    arr.some((value,index,arr)=> value < 100 )
```

* reduce
**函数式编程编程中常用的手法，需要返回一个值**
* **说明**
    - pre 第一次为init的值，之后为上一次循环调用的值   累计器   必须
    - cur 当前遍历的元素的值，相当于forEach会调中的第一个参数   必须
    - index 当前遍历元素的索引     可选
    - arr  当前遍历的数组      可选
    - init 初始值，第一次遍历的pre = init，init应该是一个值，或者已申明的变量名。 如果不申明初始值,则跳过第一次遍历，使用数组第一个值作为初始值，第二个值作为数组的cur，从index=1开始遍历而不是0   可选

```javascript
    result = arr.reduce((pre,cur,index,arr)=>{
        return pre+cur
    },init)
    // 查找最大的数
    result = arr.reduce((pre,cur)=>pre>cur?pre:cur)
    // 查找最小的数
    result = arr.reduce((pre,cur)=>pre<cur?pre:cur)
    // 求和
    result = arr.reduce((pre,cur)=>pre+cur)
    // 求积
    result = arr.reduce((pre,cur)=>pre*cur,1)
    // 数组扁平化  可以递归调用实现转一维数组
    result = arr.reduce((pre,cur)=>[].concat(pre,cur))
    result = arr.reduce((pre,cur)=>pre.concat(cur),[])
```

* reduceRight
**基本和`reduce`函数是一样的，但是它总是从数组末端开始遍历**
```javascript
    arr.reduceRight((pre,cur,index,arr)=>{
        console.log(`pre:${pre} cur:${cur} index:${index}  arr:${arr}`)
    })
```

## 构造函数 
**凡是没有形参的构造函数都可以省略圆括号，构造函数需要使用`new`关键字**

## callee / caller 
- `callee`: 指代当前正在执行的函数, 是当前函数的`arguments`对象上的一个属性，在函数中使用`arguments.callee`来访问
  - 可以用于匿名函数递归调用？    严格模式不可用
- `caller`：调用当前正在执行的函数的函数（当前函数的调用者）  这是函数的一个属性，使用`<函数名.caller>`来调用
  - 可以用于访问调用栈


## 函数
***函数是一个对象，可以有自己的属性和方法，同时函数可以通过构造函数生成***
- 函数的`length`属性
  **函数的`length`属性用于表示函数在申明的时候规定的形参的数量**

- `prototype`属性
  **每个函数都有`prototype`指向一个对象的引用，这个对象称为原型对象，通过这个函数构造的对象都会自动继承原型对象的属性**

  **原型对象上默认有一个`constructor`的属性，该属性是一个指针，用于指向其关联的构造函数**

- `call/apply`
  foo.call/foo.apply  第一个参数用于指定需要调用这个方法的对象   
  call 的后面的所有参数用于，调用的函数的实参   
  apply 只能有两个参数，且第二个参数为一个数组，哪怕只有一个参数

- `bind`
    `bind`的功能也是用于改变`this`的指向，但是`bind`返回的是一个函数而不是函数执行结果    
    `bind`的第一个参数是用于改变函数`this`指向的对象，之后的参数为这个函数的参数   
    如果`bind`函数返回的函数用作构造函数，将忽略传入`bind`的`this`的值

- toString
  大多数函数的`toString`都返回函数的源码，但是内置函数返回`[native code]`

- 函数的构造函数
  **函数是一个对象所以函数也能够通过构造函数构造出来**
  - **构造函数构造出来的函数不遵循词法作用域，而是在顶层函数（全局作用域）当中**
  - **使用eval函数可以在私有作用域内定义新的变量和函数**
  - 下面的代码执行结果是，foo为一个函数，用于求和，两个参数分别是x和y
  - 函数的构造函数，总是以给定的最后一个参数为新函数的函数体，之前的所有参数为新函数的参数
  - 当构造函数只有一个参数的时候，返回一个不带形参的函数
```javascript
    const foo = new Function("x","y","return x+y")
```

- 可调用对象
  js中所有的函数都是可调用对象，但并不是所有可调用对象都是函数   
  如：IE8及之前的window.alert以及document.getelementById，还有Regexp对象 
  这类可直接调用的对象实际意义不大，且不建议使用


# 函数式编程
函数式编程就是写出没有副作用的代码









# ???????
- 强弱引用
- map
- set
- Symbol
- 单例模式/其他设计模式
- 函数式编程/柯里化
- 惰性求值
- 代数数据类型


