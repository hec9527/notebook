# 前端学习路线 Br

## HTML

### meta标签

[meta标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)

### HTML5 的新特性

1. 语义化标签  
    `header`,`footer`,`nav`,`section`,`aside`,`dialog`,`main`,`time`等，更清晰的表达页面结构
2. 本地存储  
   `localStorage`,`sessionStorage`, 限制5M，localStorage可以长期存储。sessionStorage如同session，网页关闭就删除
3. 增强型表单  
   新增一些表单元素，或者表单属性，类似antd部分组件
4. 音视频  
   `flush player`2020年底废弃，音视频有自己的标签，画布有`canvas`, `SVG`
5. `SVG` `Canvas`
6. 地理定位  
   使用`navigator.geolocation.getCurrentPosition(success, error, options)`Api来获取用户定位信息,兼容性未知
7. 托放API
8. Web Worker
9. WebSocket协议  
    一种`双工通信机制`，握手阶段采用HTTP协议， 可以发送二进制数据也可以发送文本数据，协议标识：`ws://localhost:3000`

### HTML5 的新标签

[HTML5使用的标签](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)
[已废弃的标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

html a标签的target
- _self： 当前窗口打开链接
- _blank：新窗口或者标签打开
- _parent： 当前如果在`iframe`中，则在父级窗口打开，否则等效`_self`
- _top： 当前如果在`iframe`中，则在顶级窗口打开，否则等效`_self`

### 浏览器标准模式和怪异模式

使用`document.compatMode`查看当前模式，`BackCompat`:怪异模式，`CSS1Compat`:标准模式

区别：

- CSS`!import声明`， 怪异模式不认识
- 盒子模型，怪异模式的容器`width`包含了`border`和`padding`
- 图片垂直对齐方式， 标准模式下`vertical-align: baseline`，怪异模式下`vertical-align:bottom`
- `table元素字体`，怪异模式`table`字体的某些属性不会得到继承，特别是`font-size`
- 内联元素的大小， 标准模式下`non-replaced` inline 元素无法自定义大小，怪异模式下，定义这些元素的`width`,`height`可以影响元素尺寸
- 百分比高度， 标准模式下父级有高度申明的情况下使用， 怪异模式下，父级没有具体高度申明的时候也能使用
- 元素溢出， 标准模式`overflow: visible`, 怪异模式下会放大容器

### `xhtml` 和 `html` 的区别

xhtml可以理解为`严格模式的html`, 它兼容各大浏览器，手机，pad

xhtml严格语法
- 正确嵌套
- 所有元素必须关闭
- 区分大小写
- 属性要加引号
- 禁止私用`name`属性代替`id`属性
- 属性不能简写 `checked='checkout'`

### 使用`data-`的好处

可以在页面中存储一些不需要显示的额外信息，这些信息可以通过`javascript`，`CSS`访问

```javascript 
// <div id="main" data-name="tom" data-index-page='1'>tom</div>
const el = document.getElementById("main");
el.getAttribute("data-name"); // "tom"

// 除了可以使用 getAtribute 之外，还可以使用 dataset 来读取或者修改
el.dataset.name   // "Tom"
el.dataset.name = 'tina' // "tina"
el.dataset.indexPage // 1
```

### HTML5模板

[pug入门 - 掘金](https://juejin.im/post/6844903668383236104)

### IE6的一下Bug

目前主流的框架都支持IE8+，这种祖传的浏览器还是算了吧

### 页面渲染

#### 渐进式渲染

Vue， PWA
- 图片懒加载
- 内容确定优先级， 页面只包含最少的CSS，脚本和内容，然后使用延迟加载技术加载其它资源和内容
- 异步加载HTML，使用后端渲染时i，把html拆分，通过异步请求分块发送给浏览器

#### CSS、JS放置的位置以及原因

***CSS放在前面， JS放在后面***  
JS文件加载执行会阻塞DOM树构建(JS可以操作DOM)，CSS文件加载会阻塞渲染树构建(CSS会修改样式)  
先加载JS会影响页面加载速度，白屏时间较长，后加载CSS会导致HTML渲染时页面还没有样式，布局混乱

#### Script标签 defer async

- defer  
浏览器在该脚本将在文档完成解析后，触发 `DOMContentLoaded` 事件前执行

- async  
异步加载脚本以及他们的依赖，并且在加载完成之后`尽快`解析执行，

## CSS

### 动画  Animation

- animation
- transition
- transform

#### 动画库

- animation.css
- animation.js

#### 动画方案

- Canvas
- 图片
- SVG
- DOM

### 布局  Layout

- 弹性布局 flex
- 栅格布局
- 浮动布局
- 定位布局
- 顶宽居中布局
- 2栏布局
- 3栏布局
- 圣杯布局/双飞翼布局

### 响应式设计

- 媒体查询
- em
- rem

### 预处理器

- sass
- less
- PostCSS

### 命名方案

- BEM
- CSS Module

### UI框架

- Bootstrap
- ElementUI
- chart
- weui

### 选择器

- 选择器类型
- 选择器权重
- 伪类，伪元素   （伪元素采用 `双:`， 伪类采用单:）

### 其它

- BFC
- 盒子模型

## JavaScript

### 概念

- sycn, defer 
- 原型，原型链，继承
- 作用域
- 闭包
- 事件冒泡
- 异步队列
- 变量提升  （变量申明提升，函数整体提升）
- 立即执行函数表达式


### DOM

### BOM

- history
- location
- navigator
- localStorage
- cookie

### ES6

- generator， 以及实现原理
- AMD，UMD，commonJs规范，ESmodule规范
- 箭头函数以及其this
- promise

### Typescript

### Web Work

## 框架工具

### Vue

- Vue2.6 Vue3.0
- Vuex
- Vue-router
- Vue-cli

### React

- React Native
- Redux

### loadsh undercore

## 开发调试

### 开发工具

### 单元测试

- mocha
- Jtest
  
### 数据模拟

- mockjs
- easymock
- swagger

## 打包工具

- webpack
- parcel
- Gulp
- Browserify

## 转义工具

- babel

## HTTP

### 请求

- get,post,put,delete,option,head,connect,trace,patch

### 响应

- 2xx
- 3xx
- 4xx
- 5xx

### 报头

- 普通报头
- 实体报头
- 请求报头
- x响应报头

### HTTP版本

- HTTP1.0
- HTTP2.0

### 请求方式

- XHR
- fetch

### 策略

#### 同源策略

#### 跨域

- CROS
- JSONP
- FETCH no-cros

## 优化

### 搜索优化

#### Web语义化 

结构清晰，利于SEO

#### SEO

### 性能优化

- 网络性能优化
- 图片优化
- 源码压缩
- 协议层优化

## 本地存储

### WebStorage

- localstorage
- sessionStorage
- cooike

### Cache

- cache-control
- expires
- last modified

### H5离线

- mainfest file

## 后端基础

#### nodeJs

- express
- koa
- 同构
- 风格   restful

## 移动开发

- H5
- 小程序
- 混合开发
