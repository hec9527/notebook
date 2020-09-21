# Markdown语法

`markdown`中一行书写结束想要换行，请输入两个及以上的个空格或者空一行继续编写否则会连接在同一行，这是markdown的语法所致markdown 中的单个空格可以被解析，但是多个空格会被解析为单个空格，这导致我们不能利用空格来控制字符排版或者首行缩进

以下可以可以作为空格使用  
`&ensp; &emsp; &thinsp; &zwnj;&zwj;`

## markdown中的空格

| 标识       | 类型       | 说明                                                                                                                       |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| `&nbsp;`   | 非断行空格 | 它是按下space键产生的空格，这个空格不会累加                                                                                |
| `&ensp;`   | 半角空格   | 它等同于字体度的一半                                                                                                       |
| `&emsp;`   | 全角空格   | 此空格也有个相当稳健的特性，就是其占据的宽度正好是1个中文宽度，而且基本上不受字体影响。                                    |
| `&thinsp;` | 窄空格     | 就是该空格长得比较瘦弱，身体单薄，占据的宽度比较小,占用半角 空格的1/6宽度                                                  |
| `&zwnj;`   | 零宽不连字 | 一个不打印字符, 放在电子文本的两个字符之间，抑制本来会发生的连字，以这两个字符原本的字形来绘制。                           |
| `&zwj;`    | 零宽连字   | 一个不打印字符，放在某些需要复杂排版语言（如阿拉伯语、印地语）的两个字符之间，使得这两个本不会发生连字的字符产生了连字效果 |

## markdown中的标题

* **注意标题与 `#` 之间有空格，标题之后最好空一行**

* 标题总共只有6级

  
`# 一级标题`

`## 二级标题  `

`### 三级标题`

`#### 四级标题`

`##### 五级标题`

`###### 六级标题  `

效果：

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

---
### 其它标题

```markdown

示例：

高阶标题
=====


次阶标题
----
```

效果：

高阶标题
========

次阶标题
--

* `高阶标题`紧接着的下一行，必须有 `2` 个以及以上的  `===`，高阶标题等价于一级标题

* `次阶标题`紧接着的下一行，必须有 `2` 个以及以上的  `---`，次阶标题等价于二级标题

## markdown中的字体

### 书写

`**加粗**`， `*斜体*`， `***斜体加粗***`， `~~删除线~~`


### 效果

**加粗**， *斜体*， ***斜体加粗***， ~~删除线~~

## 转义字符

* markdown中很多字符会被转换为带有特殊作用的标记，但是当我们想要显示它本身的时候会用到`转义字符 \`

* 比如我们需要在一行中显示 `# 标题`，就可以用到转义字符

```markdown

\# 标题

\-\-\-

\*\*文字不会被加粗，*号会显示\*\*
```


## 引用

```text
示例:

> 这是引用内容
>
> 引用的每一行请输入两个以上的空格换行
>
> 或者空一行 但是空行的  >  标记不能省略
>
>> 引用内容可以嵌套
>>
>>>>> 只要你愿意，可以一直嵌套下去
>>

```

效果:

> 这是引用内容
>
> 引用的每一行请输入两个以上的空格换行
>
> 或者空一行 但是空行的  >  标记不能省略
>
>> 引用内容可以嵌套
>>
>>>>> 只要你愿意，可以一直嵌套下去
>>

## 分割线  

三个以上的 `---`  或者  `***` 都可以作为分割线

---

分割线独占一行，后面不能有除空格以外的任何字符，前面不能有3个以上的空格

4个及以上的空格会被解释为`多行代码`

---

为了展示效果，分割线上下最好空一行

## 超链接

`[链接提示内容](链接的URL地址)`

[简书](http://jianshu.com)
[百度](http://baidu.com)

引用链接：

```markdown
    [文章][1]

    [百度][2]

    [Google][3]

    [1]:https://www.cnblogs.com/crazyant007/p/4220066.html "MarkDown参考"

    [2]:www.baidu.com "百度一下，你就知道"

    [3]:https://www.google.com/ "面向谷歌编程"
```

[文章][1]

[百度][2]

[Google][3]

[1]:https://www.cnblogs.com/crazyant007/p/4220066.html "MarkDown参考"

[2]:www.baidu.com "百度一下，你就知道"

[3]:https://www.google.com/ "面向谷歌编程"

* 参考链接，下方的引用不会显示在界面上

* 引用的格式为  `[链接名称]:链接地址 "链接Title"`

* 注意Title和地址之间有一个空格

* 参考链接的地址可以反复使用

## 图片

语法

`![图片alt](url title)`

* `图片alt`  图片的说明

* `url`      图片的地址

* `title`     鼠标悬浮在图片上的时候显示的内容

* `url`和`title`之间有一个空格不能省略

* **图片也支持类似于上面超链接一行的引用功能**

![图片](./Public/2019-8-5.jpg/ "我的title成功加载出来了你的呢？")

* 控制图片大小

  * 原生markdown是不支持控制图片大小的，但是我们可以使用 `HTML` 的标签来实现

```markdown
    <img src="./1.png" title='这里是图片的title' width="240px">
```

<img src="./Public/2019-8-5.jpg/" title='这里是图片的title' width="240px">

## 脚注

* 当我们想要对当前的某一个名词或者事物进行解释的时候，可以使用脚注

```markdown
    爱迪生[^footer]是一个伟大的发明家

    [^footer]: 美国科学家、发明家、企业家，拥有众多重要的发明专利，被传媒授予“门洛帕克的奇才”称号的他，是世界上第一个使用大量生产原则和其工业研究实验室来进行发明创造的人。他也是库伯联盟学院的校友。
```

爱迪生[^footer]是一个伟大的发明家

[^footer]: 美国科学家、发明家、企业家，拥有众多重要的发明专利，被传媒授予“门洛帕克的奇才”称号的他，是世界上第一个使用大量生产原则和其工业研究实验室来进行发明创造的人。他也是库伯联盟学院的校友。

孔夫子[^^]一个伟人

[^^]: 孔子（公元前551年9月28日―公元前479年4月11日），子姓，孔氏，名丘，字仲尼，春秋末期鲁国陬邑（今山东曲阜）人，祖籍宋国栗邑（今河南夏邑），中国古代思想家、教育家，儒家学派创始人。

* 格式 `[^脚注名称]: 叙述`

* `脚注名称` 可以是常用的字母，字符，数字下划线以及他们的组合  

* 但是下方必须有对应的脚注，如上面的`[^footer]`必须对应

* 格式中的冒号为英文[半角](https://baike.baidu.com/item/%E5%8D%8A%E8%A7%92)冒号

## 无序列表

* 列表中的空行不是必须的，但是可以增加列表之间的间隔

* 无序列表的标记可以是 `-` `+` `*`中的任意一种，也可以嵌套使用  

```markdown
示例：

* 无序列表

    * 无序列表嵌套

        * 无序列表继续嵌套

        * 无序列表继续嵌套

            * 还可以继续嵌套  
```

效果：

* 无序列表

  * 无序列表嵌套

    * 无序列表继续嵌套

    * 无序列表继续嵌套

    * 还可以继续嵌套

## 有序列表

```markdown
示例：
1.  有序列表
2.  有序列表
    1.  有序列表嵌套
    2.  有序列表嵌套
        1.  有序列表嵌套
```

效果：

1. 有序列表
2. 有序列表
    1. 有序列表嵌套
    2. 有序列表嵌套
        1. 有序列表嵌套

## 有序列表无序列表嵌套

```markdown
示例：

1.  有序列表
2.  有序列表
    *  无序列表
    *  无序列表
        1.  有序列表
        2.  有序列表
        3.  有序列表
```

效果：

1. 有序列表
2. 有序列表
    * 无序列表
    * 无序列表
        1. 有序列表
        2. 有序列表
        3. 有序列表

## 表格

* 下面表格中第一行为表头内容

* 第二行为表格语法，有了第二行才能生成表格

* 第二行中 `----` 每一列至少3个

* 第二行中的 `:`用于规定表格内容对齐方式 ，从左到右为`左对齐`，`居中`，`右对齐`

* 表格默认使用居中对齐方式，不同的环境对markdown的解析也不一样，所以最终的效果也可能不同

```markdown
示例：

| 表头1                  |         表头2          |                  表头3 |
| :--------------------- | :--------------------: | ---------------------: |
| 表格第一行第一列的内容 | 表格第一行第二列的内容 | 表格第一行第三列的内容 |
| 表格左对齐             |      内容居中对齐      |                 右对齐 |

```

效果：

| 表头1                  |         表头2          |                  表头3 |
| :--------------------- | :--------------------: | ---------------------: |
| 表格第一行第一列的内容 | 表格第一行第二列的内容 | 表格第一行第三列的内容 |
| 表格左对齐             |      内容居中对齐      |                 右对齐 |

## 选择框

```text
Todo list

* [ ] 写代码

* [ ] 做作业

* [X] 买菜

* [X] 扶老奶奶过马路

* [x] 看电视
```

Todo list

* [ ] 写代码

* [ ] 做作业

* [X] 买菜

* [X] 扶老奶奶过马路

* [x] 看电视

```text
    选择框语法说明
    * [ ] 叙述
    * 后面有一个空格
    [x] 里面为X，未完成为空格
    [x] 后面有一个空格
```

## 代码

* 代码分为单行代码以及多行代码

* 代码中的 ` 是倒引符号，在英文输入法下，ESC下面的案件

* 单行代码

```markdown
    使用 单个反引号 包起来的代码为单行代码，可以放在一段文字的任何地方
    例如： `Ctrl + C` ` Ctrl + V `
```

单行代码效果

`Ctrl + C`

`Ctrl + V`

* 多行代码

```markdown
    ```javascript
        var a = 1;
        var b = 2;
    ```
```

效果：

```javascript
    var a = 1;
    var b = 2;
```

* 多行代码中的`javascript`用于指定代码的`语法高亮`，针对不同语言高亮的方式不同

* `javascript`可以省略，但是省略后就没有`语法高亮`了。也可以切换为其它 **`编程语言`**

## 流程图

示例：

```flow
st=>start: Start
e=>end: End
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes or No?
io=>inputoutput: catch something...
```

**VScode中无法显示，流程图`Tpyora中应该可以`**

## 其它图

* **以下图的支持效果不是特别好，兼容性差，可以作为了解**

* 虽然不长用，但是`nodePPT`里面会用到

示例：

```Retext
    ```mermaid
    graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    ```
```

效果：

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

* 流程图、甘特图、时序图等支持不是很广泛，这里就不一一列举了

### 序列图

```text
    ```sequenceDiagram
        participant Alice
        participant Bob
        Alice->John:Hello John, how are you?
        loop Healthcheck
        　　John->John:Fight against hypochondria
        end
        Note right of John:Rational thoughts <br/>prevail...
        John-->Alice:Great!
        John->Bob: How about you?
        Bob-->John: Jolly good!
    ```
```

```sequenceDiagram
participant Alice
participant Bob
Alice->John:Hello John, how are you?
loop Healthcheck
　　John->John:Fight against hypochondria
end
Note right of John:Rational thoughts <br/>prevail...
John-->Alice:Great!
John->Bob: How about you?
Bob-->John: Jolly good!
```

## 甘特图

```text
    ```gantt
    　　　dateFormat　YYYY-MM-DD
    　　　title Adding GANTT diagram functionality to mermaid
    　　　section A section
    　　　Completed task　　:done, des1, 2014-01-06,2014-01-08
    　　　Active task 　　　　:active, des2, 2014-01-09, 3d
    　　　future task 　　　　:　　　  des3, after des2, 5d
    　　　future task2　　　　:　　　  des4, after des3, 5d
    　　　section Critical tasks
    　　　Completed task in the critical line　:crit, done, 2014-01-06,24h
    　　　Implement parser and json　　　　　　:crit, done, after des1, 2d
    　　　Create tests for parser　　　　　　　:crit, active, 3d
    　　　Future task in critical line　　　　　:crit, 5d
    　　　Create tests for renderer　　　　　　:2d
    　　　Add to ,mermaid　　　　　　　　　　　:1d
    ```
```

```gantt
　　　dateFormat　YYYY-MM-DD
　　　title Adding GANTT diagram functionality to mermaid
　　　section A section
　　　Completed task　　:done, des1, 2014-01-06,2014-01-08
　　　Active task 　　　　:active, des2, 2014-01-09, 3d
　　　future task 　　　　:　　　  des3, after des2, 5d
　　　future task2　　　　:　　　  des4, after des3, 5d
　　　section Critical tasks
　　　Completed task in the critical line　:crit, done, 2014-01-06,24h
　　　Implement parser and json　　　　　　:crit, done, after des1, 2d
　　　Create tests for parser　　　　　　　:crit, active, 3d
　　　Future task in critical line　　　　　:crit, 5d
　　　Create tests for renderer　　　　　　:2d
　　　Add to ,mermaid　　　　　　　　　　　:1d
```
