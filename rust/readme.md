# Rust

## 安装 rust

```zsh
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sg
# 命令行查看
rustc -V
```

rust中有几个比较重要的工具， rustup用于管理rust工具链，rustc用于编译rust文件，类似javac，cargo是rust的包管理工具，项目管理工具

### 插件推荐

- rust-analyzer
- Even Better TOML
- Error lens
- codeLLDB (debugger 使用)

## cargo

cargo 提供了一系列工的工具，从项目的创建、测试、运行、部署。有点类似于 npm 与 node

### 常用命令

- new 创建项目，默认创建 `bin` 类型项目，可以添加 `--lib` 创建依赖库项目
- run 运行项目，默认为开发模式，可以添加 `--release` 参数以生产模式运行
- build 构建项目，默认为开发模式构建，可以添加 `--release` 参数进行生产构建
- check 编译测试

### Cargo.toml 和 Cargo.lock

- Cargo.toml 是 cargo 项目的数据描述文件，存储了 cargo 项目的所有元配置信息
- Cargo.lock 是 cargo 项目根据 .toml 文件生成的项目依赖清单

### 修改 cargo 源

在 `$HOME/.cargo/config.toml` 添加以下内容

```
[source.crates-io]
replace-with = 'ustc'

[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"
```


## rust基础

### 绑定与解构

```rust
let a = "hello world";
```

上面的代码，将字符串跟a变量进行绑定，字符串属于a变量。rust中的变量默认是不可变的，当然也可以使用 `mut` 关键字使变量变为可变的。同时let还可使从复杂的变量中结构出一部分内容，如下

```rust
// a 不可变， b可变 字符串
let (a, mut b) = (true, "hello world");
```

### 常量

rust中的常量使用const定义，定义的常量不能使用 `mut` 关键字，并且声明常量时必须指定类型


### 变量遮蔽

rust允许重复声明变量。后声明的变量会重新生成一个值并且与变量绑定。

mut声明的变量可以修改同一个内存地址上的值，不会重新分配内存，性能更好

### rust数据类型

rust数据类型包括基本类型和复合类型

- 数值类型：
  - 有符号整数(i8,i16,i32,i64,i28,isize), 
  - 无符号整数(u8,u16,u32,u64,u128,usize),
  - 浮点数(f32,f64)以及有理数、复数
- 字符串：字符串字面量和字符串切片
- 布尔类型：true、false
- 字符类型：单个Unicode字符。存储为4个字节
- 单元类型：即()

### 整形字面量

| 字面量       | 实例   |
| ------------ | ------ |
| 十进制       | 12_123 |
| 十六进制     | 0xfff  |
| 八进制       | 0o999  |
| 二进制       | 0b110  |
| 字节（仅u8） | b'A'   |

## 所有权

### 所有权

1. 值只能被一个变量拥有
2. 变量离开作用域范围时被丢弃（drop）

当所有权被转移给其它对象时，原来的变量无法访问

### 借用

> 获取变量的引用，称为借用

使用 `&变量名` 的形式获取变量的引用， 使用 `*变量名` 的形式解引用

```rust
let a = 1;
let b = &a;

assert_eq!(a, *b);
```

可变引用需要将变量设置为可变类型，获取可变引用使用 `&mut 变量名` 的形式

```rust
let mut a = String::from("hello world");
let b = &mut a;
```

**同一个作用域内，每个变量可变引用只能存在一个，不可变引用可以存在多个**

**可变引用和不可变引用不能同时存在**

可变引用最后一次使用之后可以重新获取可变引用

### 切片

切片可以引用集合中一段连续的元素序列，它是一种引用，所有没有所有权

## 复合类型

### 字符串、字符串切片

Rust语言中只有一种语言类型 str, 它通常是以切片形式存在的(&str)。

字符串字面量类型即为 &str 不可变， String类型为可变类型的字符串（需要mut申明）


**&str -> String**

```rust
String::from("hello world");
"hello world".to_string();
```

**String -> &str**

直接使用 `&` 获取引用即可

其他
 - 字符串内部采用 `[u8]` 数组存储，英文占1字节，中文3字节。字符采用 `Unicode` 类型，每个字符占4字节
 - 字符串切片采用range语法(0..5)，左闭右开。生成迭代器
 - 字符串支持输出转义字符 `ASCII` 和 `Unicode`
 - 使用 `r'\x52'` 取消转义
 - 字符串中使用双引号，需要在开始结束双引号前后加#，如：`r#"You say "hello world""#`
 - 字符串中使用`#`，需要在开始结束双引号前后加三个#，如：`r###"python 使用#注释代码"###`


字符串使用 `.chars()` 方法遍历，返回正确的 `Unicode` 字符, `.bytes()` 返回底层数组

### 元组

元组是长度固定，可以包含多种类型的有序组合，可以使用 `.索引`访问内部元素，支持解构。

### 结构体

结构体申明类似于 `typescript` 中的 `interface` 声明。

```rust
struct Student{
  name: String,
  age: u8,
  graduate: bool
}
```

创建解构体实例时需要对每个字段进行初始化，初始化顺序不重要

```rust
let mut student = Student {
  name: "saga",
  age: 24,
  graduate: false,
}
```

结构体赋值字段名和变量相同时可以缩写，同时支持解构赋值，解构语法必须实在尾部。结构体中没有实现 `Copy` 特征的字段，所有权被转移到新的结构体中，之前的无法使用

**元组结构体**
 - 结构体必须有名称，但是字段可以没有名称，字段没有名称的称为 `元组结构体`

```rust
struct Point(i32, i32, i32)
```

**单元结构体**
   - 没有任何字段和属性的结构体，称为 `单元结构体` ，可以给它添加方法使用

### 结构体方法

```rust
struct Square {
  width: i32,
  height: i32,
}

// impl为结构体增加方法或者关联方法， 多个impl可以合并
impl Square {
  // 第一个参数为实例本身的，为实例方法
  fn area(&self) -> i32{
    self.width + self.height
  }
  // 不引用实例的为关联方法
  fn new(size: i32)-> Square{
    Square {
      width: size,
      height: size
    }
  }
}
```

## 枚举

枚举可以将多个值，设置统一的类型，可以通过 `::` 语法访问枚举成员

```rust
enum Poker{
  Clubs,
  Spades,
  Diamonds,
  Hearts,
}

println!("{:?}", Poker::Clubs);
```

**Option 枚举**

```rust
enum Option<T> {
  Some(T),
  Node
}

let x: Option<i8> = Some(5);
```

## match

```rust
let num: u8 = 3;

match num {
  1 => 1,
  2 => 2,
  other => num, // 通配符匹配其他所有可能
  _ => num,  // `-` 占位符匹配所有可能但是不处理
}
```

### if let

`if let` 是 `match` 的语法糖，另外 `if let` 支持else分支，以下两种写法是等效的

```rust
let num = Some(2);

if let Some(num) = num {
  println!("num = {num}");
}else{
  println!("num is none");
}
```
等价写法
```rust
let num = Some(2);
match num{
  Option::Some(num) => println!("num = {num}"),
  Option::None => println!("num is none")
}
```

## 模块化