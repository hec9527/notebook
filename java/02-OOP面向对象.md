# 面向对象

- 在类的方法中，如果不存在命名冲突，则可以省略`this`

## 面向对象基础

### 访问修饰符 (类似 ts)

| 修饰符    | 本类中 | 子类中       | 同包类中 | 其它类中 |
| --------- | ------ | ------------ | -------- | -------- |
| public    | 可以   | 可以         | 可以     | 可以     |
| protected | 可以   | 可以         | 可以     | 不可以   |
| 默认      | 可以   | 同包子类可以 | 可以     | 不可以   |
| private   | 可以   | 不可以       | 不可以   | 不可以   |

### 构造函数

- 构造函数与类同名， 无返回值，也无 `void`，使用 `new` 关键字调用
- 默认生成无参数构造函数，如果自定义构造函数，则不会生成
- 没有在构造函数中初始化的字段，都会给出对应类型的默认值
- 多个构造方法，类似函数重载
- 构造方法中可以使用 `this()` 调用其它构造方法，提高代码复用率

### final 关键字

- 修饰类，则类无法被继承
- 修饰方法，则该方法无法被重写
- 修饰变量，则该变量为常量，不能重新赋值，但是可以在构造函数中修改，同 `ts` `readonly`

### 继承

- `Java` 中除了 `Object` `都继承自其它类，Object` 没有父类
- 继承使用`extends` 关键字，一个类只能继承一个类
- 子类可以使用父类的 `public` 和 `protected` 的方法、属性

#### super 关键字（同 ts）

- 在子类中访问父类的属性或者方法，可以使用 `super` 关键字

#### 向上转型

父类类型的变量，可以赋值子类的实例

### 多肽（override）

子类中写一个父类的同名函数，如果签名不同，则属于 `overload`，签名相同则属于 `override`

### 抽象

同 `ts`

### 接口(类 ts)

- `ts` 的接口可以规定字段
- 如果一个抽象了，没有字段，全部方法都是抽象方法，则可以定义为一个 接口(`interface`)
- 接口规定的所有方法都是公共的，所以不用写 `public`
- 一个类实现接口使用`implements`关键字
- 一个类可以实现多个接口
- 接口可以扩展其它接口，扩展使用 `extends`
- `default`方法，方法使用 `default` 关键字修饰，可以添加方法实现，继承该接口的子类不必实现该方法

### 静态方法、字段

- `Java` 中静态方法、字段不能和实例的方法、字段同名
- 静态属性采用 `static` 修饰
- `Java` 中接口也可以使用静态字段，但是接口的静态字段必须为 `fianl` 类型

```java
// 完整写法
public interface Hello{
    public static final String name = "saga";
    public static final int age = 32;
}
// 简写形式
public interface Hello{
    String name = "saga";
    int age = 34;
}
```

## 包 package

- 用来解决 java 中的命名冲突，类似于名称空间，一个名称空间下不能存在相同名字的类、接口等
- java 的目录层级和包的层级一致，包之前没有父子、继承关系， 编译后的`.class` 文件也需要按照包结构存放
- 完整的类名：`包名.类名`, JVM 加载类的时候只看完整的类名

## 包作用域

不使用`public`, `protected`, `private`修饰的字段和方法就是`包作用域`，位于同一个包的类，可以访问`包作用域`的字段和方法

## 导入

在类中是使用其他 `class`

- 使用完整的`包名.类名`， eg: `new com.hc.Arrary()`
- 采用 `import`，eg: `import com.hc.Arr`，后面可以使用`new Arr()`
- 全部导入`import com.hc.*`，导入该包里面的所有类
- 导入静态字段和方法`import static java.lang.System.out`, 然后就可以直接使用`out.print()`

## 内部类

在类中定义的类，内部类实例不能单独存在，必须依附于一个外部类

```java
public class Main {
    public static void main(String[] args) {
        Outer outer = new Outer("Nested");
        Outer.Inner inner = outer.new Inner();
        inner.hello();
    }
}
class Outer {
    private String name;
    class Inner {
        void hello() {
            System.out.println(Outer.this.name);
        }
    }
}
```

### 静态内部类

使用 static 修饰内部类，不依附外部类实例，无法引用外部类实例，但是可以访问外部类的 private 静态字段、方法

## classpath

**_不用设置任何 `java` 核心库到 `classpath` 中_**

- `classpath` 是一个 jvm 的环境变量，指示 jvm 如何搜索`.class`文件， 也就是编译后的字节码文件。
- `classpath` 是一组目录集合，带空格的目录使用`""`括起来。不同目录`window`使用`;`分割， `linux`使用`:`分割
- `classpath` 可能长这样`.:/usr/shared:/usr/local/bin:/home/hec/bin`，其中的 `.` 表示当前目录
- 不推荐在系统环境设置`classpath`，推荐在启动 JVM 的时候传入`-cp` 或者 `-classpath` 设置， 默认 `classpath` 为 `.`

## jar 包

将 `package` 组织的各个目录层级的 `.class` 文件打包成一个 `jar` 文件，如果需要执行一个 `jar` 包的 `class` ，只需要吧把 `jar` 包放到 `classpath` 中

- `jar` 包就是 `zip` 包，打一个 `zip` 压缩包然后修改后缀就可以创建 `jar` 包
- `jar` 包的第一层级不能是 `bin` ，应该是 `bin` 的子目录
- `jar`包可以包含一个 `/META-INF/MANIFEST.MF`的文件，纯文本，可以指定`Main-Class`和其它信息，如果存在`Main-Class`，就不用指定运行的入口 `.class`

```shell
# 使用 `jar` 包的 `class` 文件
java -cp ./hello.jar com.hc.HelloWorld
```

```shell
# 运行 jar 包
java -jar hello.jar
```

## 模块

java9 开始，标准库 `rt.jar`被拆分成一堆`.jmod`, 模块项目和普通项目相同，只需要在 `src/` 下面添加一个 `module-info.java`

```java
// module 后面的模块名和包的命名规则相同
module hello.world{
    requires java.base // 任何模块都会导入，可不写
    requires java.xml
}
```

### 打包模块

```shell
# 将src目录下所有的.java文件都进行打包并且放到./bin目录下
java -d ./bin ./src/**/*.java

# 将项目打包为jar (简化命令)
jar -c -f hello.jar -e basic/HelloWorld -C bin .

# 将jar转为jmod
# ...  算了 不常用
```
