
# MarkDown说明

> markdown是一种可以使用·普通文本编辑器·编写的标记语言，它可以使普通文本具有一定格式
>
> markdown简洁明了，总共只有十几种标记，常用的就只有几种，学习成本低
>
> 应用范围广泛，不论是使用markdown编写博客，编写简单网页，还是个人日记都非常方便
>
> 同时像Github，简书，博客园等很多网站都支持markdown
>
> 本教程就是采用markdown编辑 导出
>
> 本教程中部分文字（默认为蓝色，不同地方着色不同）为超链接可以直接点击跳转
>
> 单行代码在本文中作为强调作用，单行代码下面会提到

# 编辑器推荐

* markdown的编写并不需要特殊的编辑器，即便是记事本都可以编写markdown文本

* 市面上的支持markdown的编辑器很多，这里推荐两种
  * Windows
    * VSCode
    * Atom
    * CuteMarkEd
    * MarkdownPad2
    * Miu
    * Typora
    * RStudio
  * Linux、MacOS
    * VSCode
    * Atom
    * Typora
    * ReText
    * UberWriter
    * RStudio
  * OSX
    * VSCode
    * Atom
    * Byword
    * Mou
    * Typora
    * MacDown
    * RStudio

## 推荐一  -- VSCode

> VSCode是由微软开发的开源产品，全称为：visual studio code
> 优点：轻量级，跨平台，内置插件，语法高亮。第三方插件，页面友好，长期支持稳定更新

1. 下载
  
    [点击这里跳转到下载链接--稳定版](https://code.visualstudio.com/docs/?dv=win64user) 如果下载安装存在问题请联系：管理员-周军协助处理  

    [点击这里跳转到下载链接--内测版](https://code.visualstudio.com/docs/?dv=win64user&build=insiders)  如果想要提前体验新奇的更新，可以使用测试版，但是测试版可能存在严重bug，生产环境请使用稳定版   

2. 安装

    双击下载的安装包 `.exe` 文件  
    1. 接受协议

         <img src='./Public/vscode安装1.png' width='400px'>

    2. 选择程序的安装位置

         <img src='./Public/vscode安装2.png' width='400px'>

    3. windows开始菜单文件夹，如果不需要就勾选左下角  

         <img src='./Public/vscode安装3.png' width='400px'>

    4. 勾选编辑器功能
        * 添加到桌面方便找到  

        * 第二个勾选后可以鼠标右键`文件`的时候选择使用vscode打开

        * 第三个勾选之后可以鼠右键`文件夹`的时候选择使用vscode打开

        * 第四个勾选之后，将vscode作为默认的`文本编辑器` 

         <img src="./Public/vscode安装4.png" width="400px">

    5. 完成安装

         <img src="./Public/vscode安装5.png" width="400px">

3. 打开

    1. 找到程序的快捷方式打开

    2. 双击文本文件调用VScode打开(需要勾选安装步骤4的第4个选项)

    3. 鼠标右键`文件夹`或者`桌面`或者`所在目录空白地方`，选择 `open vs code`(需要勾选安装第四步第3个选项)

    4. 鼠标右键`文件`,选择 `open vs code`（需要勾选安装第四部第2个选项）

4. 增强  
    1. 打开插件市场

        * vscode只是一个文本编辑器，对比记事本，他除了有语法高亮，文本查询、替换、根据上下文提示...并没有多少特别的功能

        * 想要更方便的使用vscode可以下载相应的插件  

        * 这里只推荐 markdown 相关的插件

         <img src="./Public/vscode-插件安装1.png" width="400px">

    2. 搜索插件

       先安装`简体中文插件` 在搜索框输入`chinese` 就会提示相关插件 选择带`简体`的安装 点击右侧的`install`就ok了

        <img src="./Public/vscode-插件安装2.png" width="400px">

    3. 安装其它插件

        安装过程都是一样的，这里就不一一列举了，只列出需要安装的插件名

        * `Path Intellisense`  -- 路径自动填充插件

        * `Markdown All in One`  --  就像它的名字一行，编写markdown一个插件就够了

        * `Markdown Preview Enhanced`   -- 这个插件的功能也很强大，附带[中文文档](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)

        * `markdownlint`  --- markdown于法检测工具，严格语法，markdown本身语法松散，如果想写出完全符合规范的文本可以启用这个插件

5. 新建文档

     * 选择菜单栏：文件->新建文件 之后打开一个空白文件，或者快捷键 `Ctrl+N`新建文件

     * 点击右下角`纯文本` 或者 `Ctrl+Shift+P`  打开命令窗口 输入`language`

     * 选择或者搜索 `markdown` 如果右下角的 `纯文本` 变成了 `markdown`就ok了

     <img src="./Public/vscode-新建markdown文件.png" width="400px">

     * 嫌每次新建切换语言麻烦，可以`Ctrl+ ,` 打开设置窗口，搜索框输入`默认语言`，在下方搜索结果中修改为`markdown`然后关闭当前页面，看下图不是关闭编辑器，而是关闭编辑器的一个`tab`

     * 修改之后再次新建一个文件看看是不是默认`markdown`格式

     <img src="./Public/vscode-新建markdown文件1.png" width="400px">

6. 预览
  
    `markdown`是一种标记语言，它的展示效果比直接编写的源文件更加美观、清晰

    使用快捷键`Ctrl+K V`，打开预览界面。英文输入法状态，先按`Ctrl + K`然后全部松开，再单独按`V`  

    VScode默认不支持`markdown`预览，需要安装插件这里使用的是之前安装的 `Markdown All in One`

## 推荐二  -- Typora

> 很多人看完上面可能会觉得安装一个编辑器这么麻烦，难道就没有一种简单的工具么？
>
> 首先我们并没有做多少，只是步骤比较细致而已，其次还真的就有一个开箱即用的编辑器 `typora`
>

1. 下载

    [官网下载](https://www.typora.io/#windows)     如果官网下载较慢，请使用下方的`腾讯软件中心下载`

    [腾讯软件中心下载](https://pc.qq.com/search.html#!keyword=typora)  请展开下载按钮下拉菜单，选择普通下载，否则会下载`腾讯软件中心`

2. 安装

    傻瓜式安装过程   一直点击下一步下行了

3. 使用  

    `typora`的使用非常简单，`typora`是专门为`markdown`而设计的

    <img src='./Public/typora.png' width='400px'>

    * 图中，上面的箭头为编写区域，里面写了一些小demo

    * 图中左下角第一个圆圈可以展示/关闭侧边栏，侧边栏可以浏览文件或者查看当前文件的`大纲`  

    * 图中左下角第二个为`源码模式`，`源码模式`在编写时可以保留标记。默认为`混合模式`一行输入完成之后就渲染  

    * `混合模式` 中输入内容时可以看到输入的`markdown`标记，换行后标记消失，内容自动格式化为相应的展示格式

    * 右下角的`zh`表示拼写检查，当前为中文检查，`18词`是当前页面的词数统计  

4. 常用快捷键
    | 快捷键             | 功能     |
    | ------------------ | -------- |
    | `Ctrl + N`         | 新建窗口 |
    | `Ctrl + O`         | 打开文件 |
    | `Ctrl + [`         | 向左缩进 |
    | `Ctrl + ]`         | 向右缩进 |
    | `Ctrl + U`         | 下划线   |
    | `Alt + shift + 5`  | 删除线   |
    | `Ctrl + K`         | 超链接   |
    | `Ctrl + Shift + I` | 插入图像 |

    * 默认快捷键有很多，你不必记住他们，因为你随时可以在菜单栏找到它们

    * 如果你对markdown语法足够熟悉的话，你甚至不需要记住这些快捷键，他们只会增加你的编码速度的，但并不是必须的  

    * **快捷键在源码模式不可用，只可用于混合模式**

# Markdown语法

> 介绍完编辑器，我们终于可以开始编写`markdown`
>
> 你要相信`markdown`真的不难，学会它大概只需要花费你十几分钟  
>
> 这里有几点需要特别说明，
>
> `markdown`中一行书写结束想要换行，请输入两个及以上的个空格（不是特别推荐，markdownlint 会语法警告）
>
> 或者空一行继续编写
>
> 否则会连接在同一行，这是markdown的语法所致
>
> markdown 中的单个空格可以被解析，但是多个空格会被解析为单个空格，这导致我们不能利用空格来控制字符排版或者首行缩进
>
> 以下可以可以作为
>
> &ensp; &emsp; &thinsp; &zwnj;&zwj;

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

```markdown

示例：
  
# 一级标题

## 二级标题  

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题  
```

效果：

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

其它标题

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

```markdown
示例：  

**加粗**  

*斜体*  

***斜体加粗***  

~~删除线~~

```

效果：  

**加粗**

*斜体*

***斜体加粗***

~~删除线~~

## 转义字符

* markdown中很多字符会被转换为带有特殊作用的标记，但是当我们想要显示它本身的时候会用到`转义字符 \`

* 比如我们需要在一行中显示 `# 标题`，就可以用到转义字符

```text

\# 标题

\-\-\-

\*\*文字不会被加粗，*号会显示\*\*
```

\# 标题

\-\-\-

\*\*文字不会被加粗，*号会显示\*\*

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

4个及以上的空格会被解释为`多行代码`，多行代码下面会提到  

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

```markdown
图片示例：

    ![图片alt](url title)
```

* `图片alt`  图片的说明

* `url`      图片的地址

* `title`     鼠标悬浮在图片上的时候显示的内容

* `url`和`title`之间有一个空格不能省略

* **图片也支持类似于上面超链接一行的引用功能**

![图片](./Public/2019-8-5.jpg/ "我的title成功加载出来了你的呢？")

* 控制图片大小

  * 原生markdown是不支持控制图片大小的，但是我们可以使用 `HTML` 的标签来实现

```markdown
    <img src="./Public/2019-8-5.jpg/" title='这里是图片的title' width="240px">
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
