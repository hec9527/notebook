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

## rust数据类型

rust数据类型包括基本类型和复合类型

- 数值类型：有符号整数(i8,i16,i32,i64,i28,isize), 无符号整数(u8,u16,u32,u64,u128,usize),浮点数(f32,f64)以及有理数、复数
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