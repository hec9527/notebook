
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
