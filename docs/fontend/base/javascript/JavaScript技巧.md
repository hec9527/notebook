
# JavaScript 中的技巧

## 计算结果取整

- 利用位操作符 `|` 完成 或者利用 `~~`

```JavaScript
    var a = 22.2 / 2.3 | 0;
    var b = ~~(11.2 / 12);
```

## 不申明第三个变量交换两个值

```JavaScript
    // 方案一
    var a = 1, b = 2;
    a = [b,b = a];
    // 方案二   适用于数字
    var a = 1, b = 2;
    a = a + b;
    b = a - b;
    a = a - b;
    // 方案三 ES6可用
    var a = 1, b = 2;
    [a, b] = [b, a];
```

## 采用闭路运算符代替单分支`if`

```JavaScript
    (condition)&&(statement)   // 使用的时候括号可以视情况取消
```

## 更好的打印信息

```JavaScript
    console.table(json/obj/string/...)   //chrome可用,使用表格排版打印
```

## 禁止别人使用`ifame`标签加载网页

```JavaScript
    if(window).location!= window.parent.location){
        window.parent.location = window.location;
    }
```

## `for`循环优化

1. 使用`for`循环遍历数据时，缓存数组的长度，可以提高三倍以上的性能

2. JavaScript当中数组遍历的效率(简单遍历1000w次的结果)

    | 遍历方式          | 消耗时间 |
    | ----------------- | -------- |
    | for / while       | 30ms     |
    | for不缓存数组长度 | 118ms    |
    | reduce            | 126ms    |
    | forEach           | 152ms    |
    | for of            | 160ms    |
    | every / some      | 176ms    |
    | map               | 215ms    |
    | for in            | 29343ms  |

## JavaScript 当中常见的兼容性问题

***如果没有特俗说明FF即代表firfox以及Chrome***

### 事件

- window.event
  - 表示当前事件对象，IE有这个对象，但是FF没有
- 获取事件对象
  - IE使用srcElement获取事件源，但是FF采用target获取事件源
- 添加、移除事件
  - IE
    - element.attachEvent("event",CallBack)
    - element.detachEvent("evnet",CallBack)
  - FF
    - element.addEventListener("event",CallBack,boolean)
    - element.removeElementListener("event",CallBack，boolean)
