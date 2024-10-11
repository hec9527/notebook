# Swift

## 基础内容

### 变量/常量

声明： 

swift可以使用`let`声明常量，使用`var`声明变量，变量可以重新赋值，类型不能改变，常量必须声明的时候赋值。不允许重复声明

类型：

类似于TS在变量名后添加冒号空格类型，可以给变量添加内容，通常不需要添加类型，编译器可以自己推导类型

命名：

支持使用中英文、表情符号、字母数字下划线$等，但是不是数字开头，不能使用保留字命名，实在要用保留字可以加反引号括起来

输出：

通常使用 `print` 来输出变量，可以指定分隔符和终符来打印  `print(1,2,3, separator: "_", terminator: "\t")`。

在字符串中使用反斜线和圆括号输出变量 `print("count is \(count)")`

注释：

```swift
// 单行注释
/*
/* 多行注释可以嵌套 */
*/
```

分号：

不是必须的，如果一行写多句代码，分号是必须的

### 数据类型

基础数据类型：整数、浮点数、字符串、布尔值

集合数据类型：字典、数组、集合

整数包含8, 16, 21, 64位编码的有符号和无符号整。整数类型提供了属性 `max` `min` 获取对应类型的最大最小值

`Int` 和 `UInt` 能在32位平台上表示32位长度的整数，在64位平台上表示64位长度的整数

浮点数 double float，float精度只有6位，double有至少15位

整数、浮点数都可以在中间添加下划线提高可读性

使用数据类型进行类型转化，相同类型才能相加，数字字面量没有类型，可以直接相加

```swift
// SomeType(initialValue)
var u8: UInt8 = 122
var i8: Int8 = 111
var result = u8 + UInt(i8)
```

### 数值字面量

- 10进制，没有前缀
- 二进制，前缀`0b`
- 八进制，前缀`0o`
- 十六进制，前缀`0x`

### 类型别名

使用 typealias 来定义类型别名

```swift
typealias Step = UInt32
```

### 元祖

任何数据类型按顺序排列就可以组成元组，元组可以通过分解得到其中的基础值，不需要的值可以使用下划线替代。也可以通过索引访问其中的值，如果在创建时给元素命名了，则可以通过名字来访问

```swift
let httpStatus = (200, "OK")
let code, message = httpStatus
let code = httpStatus.0

// 通过名字访问元祖
let httpStatus = (code: 200, message: "OK")
let code = httpStatus.code
```

### 可选项

如果一个变量可能不存在值，则可以使用可选项标识，没有值的时候，值位 `nil`

```swift
let age: Int? = 10
```

### 隐式展开可选项

和可选项相同，可以用来标识一个值可能为nil，他们有些许不同

- 声明不同，隐式展开可选项使用 `类型!` 表示
- 使用不同，隐式展开可选项不需要使用 `!` 操作符来获取值，直接使用变量名即可
- 赋值不同，隐式展开可选项不能赋值 `nil`

```swift
let implicitString: String! = "hello world"
// 这里不需要标记为可选项，如果implicitString为nil，则抛出运行时错误
let newString: String = implicitString
```

### nil

可以将可选变量赋值 `nil` 来设置为没有值，当值缺失时可以使用页面几种方式处理
- 当值为nil时跳过这段代码
- 通过返回nul或可选链(?.)来传递nul
- 使用??提供默认值
- 使用!操作符停止程序执行

### 可选项绑定

使用 `if` 和 `while` 来处理可选项内部的值

```swift
if let number = Int(someValue){
    // 
}

/* 简写 */
if let number {
    // 等效于  if let number = Int(number)
}

/* 包含多个可选项绑定 */
if let number = Int(someValue), let str = String(someValue1){
    // 包含多个的时候也可以简写
}
```

- `let` 可以换成 `var`，来声明变量而不是常量
- `if let` 可以写成简写形式
- 多个 `if let` 可以嵌套使用，但是不能使用 `else`

### 空值合并

如果一个值为nil可以使用空值合操作符(??)提供默认值

```swift
let name: String

let name1 = name ?? "Anonymous"
```

### 强制展开

当一个值为nil表示程序错误的时候，可以使用强制展开操作符(!)来获取值，如果变量有值就是其展开的值，否则会抛出运行时错误

```swift
let possibleNumber = "123"
let convertedNumber = Int(possibleNumber)

let number = convertedNumber!

// 另外一种方式处理nil
guard let number = convertedNumber else {
    fatalError("The number was invalid")
}
```

### 错误处理

可以在函数声明的时候添加 `throws` 来表示函数可能会抛出错误，调用一个可能抛出错误的函数时，需要在表达式前添加 `try`。可以使用 `do...catch` 来捕获错误，`catch` 可以有多个分支

```swift
func maybeThrow() throws {
    //
}

do{
    try maybeThrow()
} catch Error.someError {
    //
} catch Error.overload(let message) {
    //
}
```

### 断言和先决条件

断言和先决条件都可以在程序出现非期望的情况是终止执行，但是他们有区别

- 断言：在调试模式下运行，在发布模式下不运行
- 先决条件：在调试模式和生产构建中都生效

断言：

断言使用全局函数来写断言，包含一个bool值和一个bool值为false时的错误信息，错误信息可以省略

```swift
assert(boolValue)
assert(boolValue, "这是一个提示信息，当然是可以省略的")
assertionFailure("error message") // 标明断言失败
```


### 先决条件

在代码中可能为假但是必须为真的地方使用先决条件，比如检测下标越界，空值错误等

```swift
// message 可以省略
precondition(condition, message);
// 手动调用标明先决条件发生错误
preconditionFailure(message);
```

## 运算符

swift中包含一元、二元、三元运算符，赋值预算支持将等号右边结构给左边

算术运算： +、-、*、/

swift默认不允许值溢出，可以使用 `&+` 来行使溢出行为

求余：使用 % 可以求余数

一元加、一元减： 跟 js 一致

组合赋值： `+=`、`-=` 跟js一致

比较运算符：跟js一致，包含 `===`、`!==` 来判断引用是否相同，相同数量的元祖也可以用来比较大小，但是元祖不能包含bool值

三元运算符：三目运算符同js

空值合并运算符： `??` 左边必须是一个可选类型，右边必须是左边相同类型的非可选类型

闭区间运算符：`1...3`

半开区间运算符：`1..<3` 半开区间运算符不包含右侧值

单侧区间：单侧区间属于闭区间，一侧尽可能的远，可以用在数组索引和非数组场景 

```swift
// 有点类似于python的数组切片
for name in names[...3]{
    //
}

let range = ...5;
```

逻辑运算符： `!`，`&&`， `||`，逻辑运算符是从左到右以此运算的

## 字符串、字符

字符串和字符类型都使用双引号，支持字面量。

### 多行字符串

多行字符串可以使用三个双引号，字符串内部允许使用 `\` 来换行但不在字符串中插入换行符使得代码更容易阅读，多行字符串自代缩进，末尾的双引号之前的缩进长度都会被忽略。

字符串中可以包含特殊字符 `\0`(空字符)、`\\`(反斜线)、`\t`(制表符)、 `\n`、 `\r`、 `\"`、 `\'`、`\u{X}`这里的X为unicode的码表

### 扩展字符串分隔符

将字符串用#包裹起来，使其中的特殊字符不生效，在多行字符串中也可以使用

```swift
let str = #"lint 1\nLine 2"#
// 这会使\n生效
let str = #"lint 1\#nLine 2"#
// 支持多层
let str = ##"lint 1\##nLine 2"##
```

### 字符串插值

```swift
let count = 3;
print("count is \(count)")
```

## 集合

swift中包含数组、字典、集合三种集合类型，数组和字典支持索引访问，集合不支持索引访问，集合不支持重复元素

集合中的元素类型相同

### 集合的可变性

使用var声明的为可变集合，使用let声明的不可变集合。不可变集合内容、容量都不可修改

### 数组遍历

```swift
for num in nums {
   // 
}

for (index, num) in nums.enumerated() {}){
   //
}
```

### 集合类型 Set

集合类型中的元素必须可被哈希化，能有一个 `hashValue`，默认的基础类型都是可哈希的，没有关联值的枚举是默认可哈希化的，其他的值需要实现 `Hashable` 协议

集合没有简写形式，需要在申明变量的时候指定类型。也可以在指定类型的情况下，使用数组字面量创建集合

```swift
var letters = Set<Character>()
let nums: Set = [1,2,3,4,5]

```

### 字典 Dictionary

字典使用 `Dictionary<UInt8, String>` 或者 `[UInt8: String]` 语法来创建，其中key必须可被哈希化

```swift
let dic1 = [:]
let dict: Dictionary<Int,String> = []
let dict2: [Int:String] = [1:"a", 2:"b"]
```