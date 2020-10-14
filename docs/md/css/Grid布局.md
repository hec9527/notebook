# Grid 布局 （网格布局）

- 采用网格布局的盒子称为 `容器`，容器内部采用网格定位的元素称为 `项目`, 不包含嵌套子元素

- 任何添加属性 `display: grid` 或 `display: inline-grid` 的盒子都称为 `容器`

- 容器的水平区域称为 `行`，垂直区域称为 `列`

- 网格布局会忽略项目的以下属性：`float`、`display: inline-block`、`display: table-cell`、`vertical-align`和`column-*`

- 显示网格区域（即：CSS样式指定的区域，没有被占用也会空着）

## 容器属性

| 属性名                | 说明                                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| grid-template-columns | 用于设置网格的列的数量以及没列的宽度                                                                                                     |
| gird-tamplate-rows    | 用于设置网格的行的数量以及行的高度                                                                                                       |
| grid-template-areas   | 用于设置网格区域的                                                                                                                       |
| grid-template         | `grid-template-columns` `gird-template-rows` `grid-template-areas`的缩写形式                                                             |
| justify-items         | 设置单元格内容的水平位置                                                                                                                 |
| align-items           | 设置单元格内容的垂直位置                                                                                                                 |
| place-items           | `justify-items align-items`的缩写形式，可以只写一个                                                                                      |
| justify-content       | 内容区域在容器里面的水平位置                                                                                                             |
| align-content         | 内容区域在容器里面的垂直位置                                                                                                             |
| place-content         | `justfiy-content align-content`的缩写形式，可以只写一个                                                                                  |
| grid-auto-columns     | 超出预设的单元格的项目的宽度                                                                                                             |
| grid-auto-rows        | 超出预设的单元格的项目的高度                                                                                                             |
| grid                  | `grid-template-rows`、`grid-template-columns`、`grid-template-areas`、 `grid-auto-rows`、`grid-auto-columns`、`grid-auto-flow`的缩写形式 |

### `grid-template-columns` 和 `gird-tamplate-rows`

- 用于定义列的宽度( `columns` )和行的高度( `rows` )

- 可以在属性之间使用中括号，表示每一根线的名称，方便在后面引用

- 每一根网格线可以同时拥有不同的名字
  - `grid-template-columns: [c1] 100px [c2] 200px [c3] 300px [c4 englineC];`

  - `grid-template-rows: [r1] 200px [r2] 400px [r3] 200px [r4 endlineC]`

  - `grid-template-rows: repeate(3, [r-start] 1fr [r-end])`

### `row-gap` `columns-gap` `gap`

- `row-gap` 用于设置两行之间的间隔

- `columns-gap` 用户设置两列之间的间隔

- `gap` 等效于 `grid-row-gap grid-columns-gap`

### `grid-tamplate-areas`

- 定义一个区域由一个或者多个单元格组成，并且指定区域名称
  - `grid-template-areas: 'a b c' 'd e f' 'g h i';`

  - 划定区域之后，如果行列数小于划定的区域，则自动添加不足的行列，并且自动分配大小

  - 不需要使用的部分，采用 `.` 占位
    - `grid-template-areas: 'a b c' 'd e f' 'g h i';`

### `grid-auto-flow`

- 类似于`flex-direction`属性，设置排列方式，允许`row` `column`，这两个属性可以添加 `dense` 让元素尽可能的占满

## 项目属性

| 属性              | 说明                                                                                                            |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| grid-column-start | 左边框所在的垂直网格线，可以是编号（1开始），也可以是使用`gird-template-*`指定的网格线名称                      |
| grid-column-end   | 右边框所在的垂直网格线，可以是编号，也可以是网格线名称                                                          |
| grid-column       | `grid-column-start` 和 `grid-column-end`的缩写形式，`grid-column: 1 / 3`，第二个值使用 `span 2` 表示占用2列网格 |
| grid-row-start    | 上边框所在的水平网格线，可以是编号，也可以是网格线名称                                                          |
| grid-row-end      | 下边框所在的水平网格线，可以是编号，也可以是网格线名称                                                          |
| grid-row          | `grid-row-start` 和 `grid-row-end`的缩写形式，`grid-row: 2 / 5`，第二个值使用 `span 3` 表示占用3行网格          |
| grid-area         | 用于指定元素放在哪个指定的网格区域中, `grid-area: e`                                                            |
| justify-self      | 单元格内容的水平位置                                                                                            |
| align-self        | 单元格内容的垂直位置                                                                                            |
| place-self        | `<align-self> | <justify-self>`的复合形式                                                                       |

### `grid-column-*` `grid-row-*`

- 可以直接跟数字表示第几条线，也可以使用`grid-template-*`设置的网格线

- 可以使用 `grid-row-start: span 2;` 表示占据2行

### `grid-column` `grid-row`

- 使用缩写形式的时候，第二个值可以使用 `span 数字`表示占用几个网格

- 如果给定一个值，则表示开始，位置，只占用一个网格

### `grid-area` 的缩写形式

- 缩写形式为: `grid-row-start` / `grid-row-end` / `grid-column-start` / `grid-column-end`
  - eg: `grid-area: 1 / 1 / 3 / 3`
  - 表示占用第一行第二行的第一列第二列

## 内置函数

### `repeat`

- 函数接受两个参数，第一个为重复的次数，第二个为重复的值，可以使数值、百分比、fr、模式
  - `grid-template-columns: repeat(2, 200px)` 数值

  - `gird-template-columns: repeat(3, 33.33%)` 百分比

  - `grid-template-columns: repeat(3, 1fr)`  fr

  - `grid-template-columns: repeat(2, 20px 100px 200px)` 模式

### `auto-fill` 关键字

- 搭配 `repeat` 使用
  - `grid-template-columns: repeat(auto-fill, 200px)`

  - 容器会在一行尽可能多的放置项目，放不下的时候换行

### `fr` 关键字

- 用于表示比例关系，如果两列的宽度分别设置 `1fr` 和 `2fr` 就表示第一列为第二列的一半

### `minmax` 函数

- 接受两个参数，表示长度在这个范围内
  - `grid-template-columns: repeat(3, minmax(100px, 2fr)`
