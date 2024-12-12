# Dart

[dart语言概览](https://www.dartcn.com/guides/language/language-tour)

## 变量

dart 允许使用var申明变量，或者指定具体类型
```dart
var count = 1;
int number = 1;
```

## 类型

int、double、String、bool、records（元组）、Function、List（数组）、Set、Map、Runes(符文)、Symbol、Null

## 模块

下划线开头为私有变量

导入可以使用 `as` 起别名，可以使用 `show` 导出部分模块，使用 `hide` 隐藏部分模块，可以使用 `deferred as xxx` 延迟加载模块，在使用的时候 `await x.loadLibrary()` 加载延迟模块

## 集合

集合中使用 if ()   for 遍历

## 类

判断类型使用 `obj.runtimeType == Type` 或者 使用 `obj is Type` 

类可以不用new关键字实例化，未初始化属性默认为null

**常量类**，构造函数使用const修饰，构造函数中的参数必须使用final修饰，不能使用late修饰

每个类既是一个类，也是一个类型(借口而)，可以通过 `implements` 实现接口

**TODO： factory关键字？**

**TODO： 构造方法**

**构造函数**
 - 生成式构造函数
    ```dart
    class Point {
      double x = 2.0;
      double y = 2.0;
      Point(this.x, this.y);
    }
    ```
 - 默认构造函数     没有参数的构造函数
 - 命名构造函数
   ```dart
   Point.fromJson(Map<String, double> json)
      : x = json['x']!,
        y = json['y']! {
     print('In Point.fromJson(): ($x, $y)');
   }
   ```
 - 常量构造函数      如果一个类的实例不需要改变，可以使用`final`修饰所有属性，然后使用`const`修饰构造函数
   ```dart
   class ImmutablePoint {
     static const ImmutablePoint origin = ImmutablePoint(0, 0); 
     final double x, y; 
     const ImmutablePoint(this.x, this.y);
   }
   ```
 - 重定向构造函数
   ```dart
   class Point {
     double x, y;

     Point(this.x, this.y);

     Point.alongXAxis(double x) : this(x, 0);
   }
   ```
**实例方法**，
 - 实例的方法可以是一般的方法，
 - `operator` 定义加减乘除等各种运算
 - `get`、`set` 关键字定义 getter setter

**抽象类、抽象方法**
 - 类可以使用 `abstract` 定义为抽象类
- 抽象方法不写方法体，直接分号结束

## 混合

使用 mixin 关键字定义混合，类似于class，但是它不能有构造函数

使用 with 关键字混合可混合的类、mixin

可以在 mixin 中定义抽象方法，让混合这个混合的类自己去实现

mixin 可以 implements 接口，但是可以不实现接口的内容，让混合方自己去实现

mixin 使用 on 可以限制接受这个混合方，必须是 on 后面类的子类

```dart
mixin MusicalPerformer on Musician {
  performerMethod() {
    print('Performing music!');
    super.musicianMethod();
  }
}
```

`mixin class` 定义了一个可以作为混合也可以作为一个普通类 

## 枚举

类似于TS

**增强枚举类型**

## 扩展方法

给现有的库增加扩展方法

```dart
extension <extension name>? on <type> { // <extension-name> is optional
  (<member definition>)* // Can provide one or more <member definition>.
}
```

## 可调用对象

任何实现了 call 方法的实例，都可以直接调用

## 类修饰符

- abstract
- base
- final
- interface
- sealed
- mixin

只有base可以出现在mixin之前，修饰符不能用于其他声明，比如：enum、typedef、extension、extension type等