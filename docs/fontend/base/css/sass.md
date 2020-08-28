# Sass

- Sass 是一款强化 CSS 的辅助工具，在 CSS 语法的基础上增加了变量、嵌套、混合、导入等高级功能
- Sass 有两种形式，Cass采用缩进语法，Scss采用花括号语法

## 转化

- 安装`sass-convert`工具，可以将Sass形式的样式表和Scss形式的样式表互相转换

```shell
# sass 转 scss
sass-convert demo.sass demo.scss
# scss 转 sass
sass-convert demo.scss demo.sass
```

## 嵌套

- sass 允许层级嵌套、属性嵌套，`&`引用父级

## 占位符选择器

- `%foo` 例如：`%container`，这种选择器和 `#` `.`选择器类似，只不过需要使用 `@extend` 指令调用

## 注释

- sass 支持单行以及多行注释， 多行注释会被输出到编译后的css，但是单行注释不会
- 使用 `!` 作为多行注释的第一个字符，在压缩模式下会保留注释并且输出到css中
- 多行注释允许使用插值语法在注释中输出变量

```scss
    $version:'1.0.0'
    /* this file version is #{$version} */

    // 编译之后
    /* this file version is 1.0.0 */
```

## 变量

- 和css中的赋值一样，sass中的变量使用 `$` 开头
- 变量支持作用于，嵌套规则中定义的变量只能在嵌套规则中使用，在嵌套规则之外定义的变量可以全局使用
- 将局部定义的变量改变为全局作用于使用 `!global` 等同css中`!important`的用法

```scss
$bg-color: #fcc;
$border-color:#cfc;

.container{
    $bg-color:red;
    // 覆盖全局变量
    $border-color: green;
    // 这里使用局部变量
    background:$red;
}
```

## 数据类型

- 数字
- 字符串 ，有引号无引号都行
- 颜色， rgb，#fff,blue
- 布尔值
- 空值， null
- 数组， 使用空格或者逗号作为分隔符    1px 2px 3px 4px blue
- map，相当于JavaScript的对象 (k1:v1, k2:v2)

## 字符串

- 不论是有引号、无引号的字符串，在编译的时候都不会改变类型，使用插值语法的除外`#{prop}`， 使用插值语法时会去掉引号，方便插入选择器

## 数组
