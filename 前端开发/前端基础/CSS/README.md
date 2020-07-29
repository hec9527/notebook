# 样式权重/优先级

## 从上到下依次减小

- max-_ /min-_
- !important
- 内联样式
- ID 选择器≤
- 类选择器

## CSS 选择器

- 类选择器
- ID 选择器
- 属性选择器
- 伪类选择器
- 伪元素选择器
- 关系选择器
  - 后代选择器
  - 相邻后代选择器
  - 兄弟选择器
  - 相邻兄弟选择器

## @规则

- @media
- @font-face
- @page
- @support

## display

    容器的布局可以考虑为两个布局，例如：
    display:inline-bolck;
    inline:表示外层布局为行内元素，
    block:表示为内层布局为块级元素
    这时候这是的width属性是设置在内层盒子上的

## 小技巧

### 宽度相关

1. 三无准则--无宽度 将内联元素设置为块级元素后自动适应宽度，如果此时设置宽度 100%，内容存在 padding 时，会导致内容溢出
2. 宽度分离原则：给容器设置定宽，会导致容器内部的流动性丢失，这种时候想要保证流动性，可以将宽度分离出来，做成外部容器确定宽度，内部容器依然自适应内部容器的宽度。这一点可以使用`box-size`属性代替，该属性默认为`content-box`
3. 绝对定位（absolute/fixed）的容器的宽度由内部的内容决定的
4. 没有设定宽度但是设定了 top/left/right/bottom 等属性，且对立属性 top/bottom 同时存在时，根据最近的父级元素对应属性设定
5. 首选最小宽度，当元素的外层宽度设置为 0 的时候。内存存在文字等，外层宽度会被设置为文字宽度

### 高度相关

1. 如果父元素设置了`height:auto`,只要子元素在文档流中，它的百分比值的高度会被忽略。
2. 让元素支持`height:100%`
     - 显式设置高度值(非 auto)
     - 使用绝对定位(使用绝对定位时，height:100%是指定 padding-box)
3. 超越最大：当 max-width 小于 min-width 的时候，max-width 会被忽略，max-height 同理

## 案例一

### 要求：文字较少时，居中显示，文字较多时，左对齐

- `HTML`

```html
    <div class="box">
        <p class="content">内容</p>
    </div>
```

- `CSS`

```css
    .box{
        text-align:center;
    }
    .content{
        display:inline-block;
        text-align:left;
    }
```

`说明`:display:inline-block 的元素为行内元素，默认最小宽度，他的父级设置了居中显示，它作为行内元素被居中显示，当他的内容很多的时候，他的宽度就会适应到父级的宽度，然后他的文字就有左对齐效果了

## 案例二

### 要求：制作凹凸方块

`CSS`

```
    .ao{
        display:block;
        width:0;
    }
    .ao:before{
        content:"love你Love";
        outline:1px solid #f00;
        color:transparent;
    }
```

`说明`：这里使用了 Outline 属性来绘制这个凹凸形，当容器宽度为 0 的时候内容会自适应最小宽度，换行。这时候他的轮廓线就可以绘制形状了。连续单词不换行

## 案例三

### 让文本域宽度自适应

`HTML`

```
    <div class="wraper">
        <div class="textarea">
            <textarea row="5" placeholder="请输入内容"></textarea>
        </div>
    </div>
```

`CSS`

```
    .warper{
        width:500px; /* 这里可以设置其它宽度*/
    }
    .textarea{
        padding:15px;
        border:1ps solid #ccc;
        border-radius:7px;
    }
    textarea{
        width:100%;
        padding:0px;
        margin:0px;
        border:0 none;
        outline:0 none;
        resize:none;
    }
```

`说明：`给文本域添加一个没有设置宽度的外层容器，该外层容器会自动适应宽度，textarea 没有设置 padding、margin 宽度为父级的宽度，这样就可以自适应为最外层的宽度

## 案例四

### CSS 实现手风琴效果

`HTML`

```
    <input id="check" type="checkbox" style="display: none;">
    <div class="element">
        <p>这里是超长的文字</p>
    </div>
    <label for="check" class="check-in">更多↓</label>
    <label for="check" class="check-out">收起↑</label>
```

`CSS`

```
    .element {
        max-height: 0;
        overflow: hidden;
        transition: max-height .5s;
    }
    :checked ~ .element{
        max-height: 105px;
    }
```

`说明：`这里使用`max-height`属性可以实现该动画效果，如果直接修改容器的`height`可能会导致容器内部的布局混乱，同时效果很生硬。但是这里的`max-height`的是必须要足够大，才能容纳所有内容，同时不能太大，否则会导致动画滞后。

### `inline-block`

- 使用 `inline-block` 需要给每一个块设置宽度

- `vertical-align` 会影响到布局

- HTML源码之中的换行空格会导致页面存在间隙
  - 解决办法1：inline-block 元素写在一行，缺点:可读性差
  - 解决办法2：父级添加 `font-size: 0`，缺点:子元素的字体大小得重新不能继承父级
  - 解决办法3：负margin，缺点：每个浏览器需要的负margin不相同，字体大小也影响margin的值，兼容性不好
  - 解决办法4：父级添加`display: table;`, 缺点：行间隙需要单独处理

## BFC

- BFC 块级作用域
- GFC Grid作用域
- IFC 内联作用域
- FFS Flex作用域