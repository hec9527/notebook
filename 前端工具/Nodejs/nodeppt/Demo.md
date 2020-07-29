title: NodePPT入门
speaker: HC
plugins:
    - echarts


<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark.anim">

# NodePPT入门 {.text-landing.text-shadow}

By HC {.text-intro}

[:fa-github: Github](https://github.com/ksky521/nodeppt){.button.ghost}




<slide class="bg-light">
:::{.content-left}
# nodePPT介绍
---
-   nodePPT是`三水清`编写的用于通过markdown文本编写在线PPT的工具   
-   nodePPT依托于nodejs的环境
:::
:::{.content-right}
# nodePPT语法
---
-   nodeppt采用markdown编写，[:fa-github:markdown入门](https://guides.github.com/features/mastering-markdown/)  
-   markdown的标记在每一行的前面，而nodeeppt的标记大多在后面        

在md文本的每一行最后添加样式代码



<slide  :class="bg-blue">
:::: {.grid.vertical-align}
::: {.column}
# slide （页面）
-   在md(markdown)文件中，每一个\<slide\>标记都表示一个PPT页面,slide标签可以不闭合{..description}
-   slide标签会被转化为页面上的\<section\>标签，每个section标签下面都有一个 div.wrap
-   在slide标签当中可以添加一些属性 image / class(style) /:class /video
-   标签添加{..class}用于给父级元素添加样式
:::

::: {.column}
## slide 标签的属性
*   iamge 用于页面的背景图片,可以使用.dark .light不透明层 或者使用.anim使背景动起来
*   class/style 用于给section标签添加样式
*   \:class 用于给wrap添加样式
*   video 用于给section添加视频背景动画   
    *   video标签可以添加属性
    *   poster 海报
    *   muted   静音
    *   preload  预加载
    *   class
:::
::::



<slide class="slide-top">
# 颜色  color{.content-center}
:::: {.grid}
::: {.column}
-   bg-primary    #44d{.bg-primary}
-   bg-secondary  #67d{.bg-secondary}
-   bg-light     #edf2f7{.bg-light}
-   bg-black    #111{.bg-black}
-   bg-black-blue #123{.bg-black-blue}
-   bg-red   #c23{.bg-red}
-   bg-white  #fff{.bg-white}
-   {..description}
:::
::: {.column}
-   bg-green #077{.bg-green}
-   bg-blue  #346{.bg-blue}
-   bg-purple  #62b{.bg-purple}
-   bg-trans-dark  rgba(0,0,0,0.5){.bg-trans-dark}
-   bg-trans-light  rgba(255,255,255,0.2){.bg-trans-light}
-   bg-gradient-h   横向渐变{.bg-gradient-h}
-   bg-gradient-r   径向渐变{.bg-gradient-r}
-   bg-apple        纵向渐变  内容展示区域的渐变{.bg-apple}
-   {..description}
:::
::::




<slide class="slide-top">
# 文本 Text
---
:::: {.grid.vertical-align}
::: {.column}
-   text-landing   多倍字间距
-   text-intro     加大扩大行间距
-   text-subtitle   大写   扩大字母间距
-   text-label      大写加粗  行内块级元素
-   text-shadow     文本阴影(阴影位置0 0)
-   text-cols       文本分列 2
-   text-data       超大字体 超高行间距
:::

:::{.column}
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    超牛的 :::    
    :::用于表示一个div容器，可以多个嵌套,但是外层的:数量必须比内层的多，且该标记需要结束标记
    <!-- 代码展示使用pre标签 -->
    <p>Hello World</p>
</body>
</html>

```
:::
::::

<slide class="slide-top">
# 动画效果 animation

带`.tobuild`属性的元素的动画需要手动触发(← → 鼠标滑轮不会触发)   
带`.build`属性的元素的子元素会自动添加`tobuild`    
带`.animated`属性的动画在切换到slide的时候自动触发{.animated.pulse}

---

1. **fadeIn**{.bounce}
2. **swing**{.swing}
3. **flash**{.flash}
4. **pulse**{.pulse}
5. **shake**{.shake}
6. **bounceIn**{.bounceIn}
7. **wobble**{.wobble}
8. **fadeInLeft**{.fadeInUp}
9. **flipInX**{.flipInX}
10. **tada**{.tada}
11. **slideInUp**{.slideInUp}
12. **jello**{.jello}
13. **heartBeat**{.heartBeat}
14. **fadeInUp**{.fadeInUp}
15. **lightSpeedIn**{.lightSpeedIn}
16. **zoomin**{.zoomIn}
{.text-cols.build}


<slide class="slide-top">
# 布局  Layout

:::: {.grid.vertical-align}
:::{.column}
### .slide  滑动
将页面上的元素整体的朝上/朝下滑动   
slide-* 作用在slide上面 wrap以及其它的容器无效   
slide-down  /   slide-top  
::: 
:::{.column}
### .content-*   浮动
将容器朝左右方向浮动   
content-left  等效于 float:left;   
content-right 等效于 float:right;
content-center  左右居中  文字居中  宽度媒体查询一半
:::
::::
---
::::{.grid.vertical-align}
:::{.column}
### .gird  栅格布局
栅格布局需要两层容器，栅格化容器以及卡片     
栅格化容器即外层容器，需要添加.grid样式   
内容的每个小卡片采用.column  实际使用：justify-content: center;
:::
::: {.column}
### align*
aligen用于左右对齐   
用于块级元素、行内元素
:::
::::


<slide class="">
:::: {.grid.vertical-align}
::: {.column}
# 矢量图标{.fadeInUp}
[:fa-fa:查看更多](https://fontawesome.com/icons?from=io)    
```
<!-- 矢量图标的用法 -->
:fa-xxx:   →   <i class="fa fa-xxx"></i>
:~fa-xxx:~   →   <span><i class="fa fa-xxx"></i></span>外层添加span标签
::fa-xxx::   →   块级<i class="fa fa-xxx"></i>，即不会被p包裹
<!-- span标签 -->
:span:
:span: {.text-span}
```
:::

::: {.column}
### \:\:\:布局
```
    ::: div{.class}
        content
        除了div还可以是一下标签
        card    卡片  一边图片一边内容
        column   多栏布局
        shadowbox   带阴影的盒子
        steps       步骤
        gallery     图片
        flexblock   浮动框  带悬浮样式
    :::
```
:::


<slide>
:::{.content-center}
:::flexblock {.slideInUp.specs}
::fa-wifi::

## 华府帝都
坐拥城市繁华，享受健康人生

---
::fa-battery-full::

## 成都后花园
远离城市喧嚣，享受美好人生

:::


:::header
成都理想境界 :[fork me on github](https://www.github.com):{.alignright}
:::

:::footer
成都天府软件园 :成都市天府三街:{.alignright}
:::



<slide>
:::gallery-overlay

![](https://source.unsplash.com/IFxjDdqK_0U/800x600)

# Alis

Found & CEO

----

![](https://source.unsplash.com/IFxjDdqK_0U/800x600)

# Alis

Found & CEO

---

![](https://source.unsplash.com/IFxjDdqK_0U/800x600)

# Alis

Found & CEO
:::
<!-- https://source.unsplash.com/IFxjDdqK_0U/800x600 -->




<slide class="bg-gradient-v">
# PPT第0页


::: div{.content-left}
nodeppt是`三水清`使用nodejs制作的在线ppt制作演示工具   
作用是将markdown文本转换为PPT页面  
主要是为了改变：干活的搞不赢写PPT的
:::

::: div{.content-right}
slide标签为双标签   
开始标签上面的`class`属性会被应用到`HTML页面`上的`section`标签上面    
`:class`属性会被应用到`div.wrap`上面   
所有的属性值为HTML中的属性值  大小写不敏感 
:::



</slide>




<slide class="bg-blue">
# PPT第1页
<note>
   使用note可以注释
</note>

------------
:::div{.content-left}
nodeppt支持使用HTML与Markdown混合排版   
除了带尖括号的标签以及HTML标签都是在后面使用{.class}给元素添加样式 
#### 嵌套HTML元素的4级标题
嵌套HTML元素的内容，假装这里是很长很长很长很长很长很长很长很长很长很长很长很长的内容
:::
</slide>




<slide class="bg-blue slide slide-top">
# PPT第2页
文字

----
-   text普通文字
-   text-landing{.text-landing}
-   text-intro{.text-intro}
-   text-subtitle{.text-subtitle}
-   text-label{.text-label}
-   text-shadow{.text-landing.text-shadow}
-   text-context{.text-content}
-   text-cols   文本分列  两列
::: div{.content-right}
-   12323(text-data){.text-data}
:::


</slide>

<slide>
:::div {.text-cols}
Why WebSlides? There are excellent presentation tools out there. WebSlides is about sharing content, essential features, and clean markup. Each parent in the #webslides element is an individual slide.

WebSlides help you build a culture of innovation and excellence. When you're really passionate about your job, you can change the world. How to manage a design-driven organization? Leadership through usefulness, openness, empathy, and good taste.
:::
</slide>


<slide class="slide bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">
# PPT第3页{.slide-top}
-----
<div class="content-left">
# 无序列表
* 上下左右方向键翻页
    * 列表支持渐显动画 
    * 支持多级列表
    * 这个动画是moveIn{:&.moveIn}
</div>

<div class="content-right">
# 有序列表
1. 这是有序列表
    1. 有序列表{..description}
    2. 有序列表
    3. 有序列表
    4. 有序列表
2. 有序列表一级
3. 有序列表一级
</div>
</slide>




<slide class="text-shadow bg-gradient-h slide slide-top">
# PPT第4页 
### 背景颜色   
> 在slide的class中添加以下的颜色就可以设置颜色   
> 或者在:class属性中添加以下的颜色

<div class="content-left">
-   bg-primary    #44d
-   bg-secondary  #67d
-   bg-light     #edf2f7
-   bg-black    #111
-   bg-black-blue #123
-   bg-red   #c23
-   bg-white  #fff
</div>   
<div class="content-right">
-   bg-green #077
-   bg-blue  #346
-   bg-purple  #62b
-   bg-trans-dark  rgba(0,0,0,0.5)
-   bg-trans-light  rgba(255,255,255,0.2)
-   bg-gradient-h   横向渐变
-   bg-gradient-r   径向渐变
-   bg-apple        纵向渐变  内容展示区域的渐变
</div>
</slide>



<slide class="bg-apple" :class="content-center">
# PPT第五页
### 特殊图标
::fa-battery-full::  ::fa-battery-half::   ::fa-battery-empty::     ::fa-wifi::     ::fa-life-ring::
:fa-github:  :fa-th-large:   :fa-magic:   :fa-cube:   :fa-youtube:    :fa-css3:   :fa-heart-o:   :fa-flag:
:fa-cloud-download:    :fa-twitter:  :fa-phone:   :fa-envelope:
:fa-tree small:   :fa-line-chart:  :fa-film:  :fa-users: :fa-graduation-cap:   :fa-balance-scale:   :fa-cog:  :fa-bar-chart: 
:fa-info-circle small: 
:fa-tree large:
:fa-info-circle large:
::: footer{.aligncenter}
[更多图标](https://fontawesome.com/icons)
:::
</slide>



<slide class="slide slide-top bg-gradient-v">
# PPT第6页
### 动画效果
使用动画效果需要给元素添加.animated以及需要的动画效果{.heartBeat.delay-800}

<div class="content-left">
<!-- .animated 改样式会保留动画效果的第一/最后一帧 -->
<!-- animation-fill-mode： none| forwards | backwards | both  -->
-   .   该元素添加动画效果且自动播放
-   .fadeIn     淡入
    -   .fadeInUp   淡入+向上滑动{.animated.fadeInUp}
    -   .fadeInLeft 淡入+从左滑动{.fadeInLeft}
    -   .fadeInRight  淡入+从右侧滑动{.fadeInRight}
    -   .fadeInDown   淡入+向下滑动{.fadeInDown}
-   .slideIn  浮现
    -   .slideInUp   从下往上{.slideInUp}
    -   .slideInDown{.slideInDown}   
    -   .slideInLeft{.slideInLeft}  
    -   .slideInDown{.slideInDown}
</div>
<div class="content-right slide-top">
-   .flash      闪烁{.flash}
-   .swing      上下晃动{.swing}
-   .wobble     上下晃动{.wobble}
-   .shake      左右抖动{.shake}
-   .flipInX    水平翻转{.flipInX}
-   .flipInZ    水平翻转{.flipInZ}
-   .tada  .jello       花式抖动{.tada}
-   .lightSpeedIn   滑入{.lightSpeedIn}
-   .fadeOut    同fadeIn的逆过程 消失动画{.fadeOut.delay-800}
-   .slow       缓慢动画{.slow}
-   .delay-800  动画延迟800毫秒 似乎只有这么一个值{.pulse.delay-800}
-   .pulse   .heartBeat   .bounceIn     脉冲{.pluse}
</div>
</slide>



<slide class="slide slide-top bg-trans-dark">
# PPT第7页跳转

使用markdown内置的超链接功能  [text](url "叙述")   
无效的链接直接跳转到第一页PPT

------
[:fa-th-large: Layout](./layout.html)  [:fa-magic: Animation](./animation.html)  [:fa-cube: Component](./component.html)  [:fa-youtube: Media](./media.html)  [:fa-css3: Classes](./index.html)
</slide>




<slide class="slide slide-top bg-trans-dark">
# PPT第8页   
页面布局

---
::: div{.alignleft}
<div class="alignleft">

-   --- 用于分割页面的上下布局   类似于H5中的\<hr\>    
-   .slide   滑动布局 将摸一个content滑动到指定地方  slide-top/slide-bottom 
-   .alignleft   左对齐  浮动
-   .alignright  右对齐  
-   .aligncenter    
-   .content-left    内容左对齐
-   .content-right   内容右对齐
-   .content-center  内容居中对齐
-   .text-pull-right    右侧小块文本区
-   .left-aligned .right-aligned  .center-aligned  主要用于表格
:::

::: div{.alignright}
-   .avatar-40  将图片设置为行内元素与字符同行并且设置大小!![](https://webslides.tv/static/images/iphone.png .alignright.avatar-40)
:::


</slide>


<slide>
# PPT第9页
内容对齐

---
:::div {.content-left}
    左对齐文本
:::
:::div{.content-right}
    右对齐文本
:::

:::div{.content-center}
    中间对齐文本
    容器对齐使用的是content而不是aligned,
:::
:::flexblock {.metrics}
:fa-phone:
Call us at 555.345.6789
浮动容器
:::

aligned针对行内元素,比如这段文字右对齐{.alignright}

</slide>

<slide class="slide slide-top bg-white">
# PPT第10页
卡片布局     

---
:::: div{.vertical-align .grid}

::: div{.column}
!![](https://www.baidu.com/img/bd_logo1.png .size-20.aligncenter)

百度是中国最大的中文搜索引擎. {.text-intro}
:::

::: div{.column}
!![](https://www.baidu.com/img/bd_logo1.png .size-50.aligncenter)

百度是中国最大的中文搜索引擎. {.text-intro}
:::

::: div{.column.text-intro}
!![](https://www.baidu.com/img/bd_logo1.png .size-130.aligncenter)

百度是中国最大的中文搜索引擎. {.text-intro}
:::

::: {.text-landing}
    这是一段文字
:::

::::

<note>
    在nodeppt当中使用::: 可以表示页面上的div元素同时可以使用不同数量(>=3)的 : 完成嵌套
</note>

</slide>



<slide class="slide slide-top">
# PPT第11页
引用

:::div {.content-left}
![](https://camo.githubusercontent.com/acdeeb0246e58429a2e256b00a4ddca8c2d4d8a8/68747470733a2f2f776562736c696465732e74762f7374617469632f696d616765732f646176696e63692e706e67)
:::

:::div {.content-right}
"There is something only a CEO uniquely can do, which is set that tone, which can then capture the soul of the collective." ==Satya Nadella, CEO of Microsoft.== 
:::
</slide>


<slide class="bg-purple">
::: div{.content-center}
# PPT第11页
按钮

---
[按钮](url){.button}   [圆角按钮](url){.button.radius}    [带边框按钮](url){.button.ghost}    
:::
</slide>


<slide class="slide slide-top">
# PPT第12页
代码

---
:::: div{.grid.vertical-align}
::: div{.column}
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <p>hello world</p>
    </body>
```
:::

::: div{.column}
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <p>hello world</p>
    </body>
```
:::

::::


<!-- !![figure](https://webslides.tv/static/images/setup.png .aligncenter) -->
</slide>


<slide>

!![](https://webslides.tv/static/images/iphone.png .size-50.alignright)

::: div{.slide.slide-botom}
:fa-twitter: @username .alignright
:::
</slide>





<slide class="bg-light">
### 市面上主要的css预处理器：less\sass\stylus
---
|less| sass | stylus
:---|:---:|----:|---
环境 |js/nodejs | Ruby | nodejs
扩展名 | .less | .sass/.scss | .styl
特点 | 老牌，用户多，支持js解析 | 功能全，有成型框架，发展快 | 语法多样，小众
案例/框架 | [Bootstrap](http://getbootstrap.com/) | [compass](http://compass-style.org) [bourbon](http://bourbon.io) |

</slide>


<slide class="slide-top">
# 布局  Layout

:::: {.grid.vertical-align}
:::{.column}
### .slide  滑动
将页面上的元素整体的朝上/朝下滑动   
slide-* 作用在slide上面 wrap以及其它的容器无效   
slide-down  /   slide-top  
::: 
:::{.column}
### .content-*   浮动
将容器朝左右方向浮动   
content-left  等效于 float:left;   
content-right 等效于 float:right;
content-center  左右居中  文字居中  宽度媒体查询一半
:::
::::
---
::::{.grid.vertical-align}
:::{.column}
### .gird  栅格布局
栅格布局需要两层容器，栅格化容器以及卡片     
栅格化容器即外层容器，需要添加.grid样式   
内容的每个小卡片采用.column  实际使用：justify-content: center;
:::

<!-- pre标签适用于展示代码 -->
:::pre{.language-textile}
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>Hello World</p>
</body>
</html>

```

::::

