# Vue

## 导入

    ```js
    <!-- 开发环境 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 生产环境 -->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    ```

## Vue响应式

Vue实例在创建时就存在的对象才会响应式更改，之后添加的内容都不会响应式更新到屏幕

如果在创建Vue对象之前使用了`Object.freeze(ojb)`冻结了Vue对象引用的对象，则不再是响应式的

## Vue的生命周期

![vue生命周期](./Assets/lifecycle.png "Vue的生命周期")

## Vue指令

指令的职责是：当表达式的值修改的时候，将其所产生的影响，响应式的作用于DOM

指令带有`v-`前缀特殊特性，指令预期是单个JavaScript表达式，
`v-cloak`； 给元素添加该指令之后，在Vue实例创建之前，该节点不会显示到页面

## 参数

部分指令可以接受一个参数，在指令名称之后以冒号表示，例如：`V-bind`、`v-on`

    ```js
        <a v-bind:href="url"></a>
        <button v-on:click="foo"></button>
    ```

## 动态参数

以上的参数可以使用动态参数

    ```js
        <a v-bind:[attr]="url"></a>
        <button v-on:[event]="foo"></button>
    ```
**动态参数应该是一个字符串，异常情况下为`null`，当为`null`的时候用于显式的移出绑定，其它任意的非字符串类型的值将触发一个警告**

## 修饰符

修饰符是以半角句号 `.` 指明的特殊后缀，用于指定指令应该以特殊方式绑定，例如：

    ```js
        <form v-on:submit.prevent="onSubmit">...</form>
    ```

***指令对触发的事件调用：`event.preventDefault()`***

***系统修饰符必须使用组合才能触发 ctrl  shift alt***

## 缩写

### v-bind缩写

    ```js
        // 完整
        <a v-bind:href="url">...</>
        // 缩写
        <a :href="url">...</>
    ```

### v-on缩写

    ```js
        // 完成
        <a v-on:click="foo">...</a>
        // 缩写
        <a @click="foo">
    ```

## 模板表达式

模板表达式当中只能包含一条`表达式`，不能包含语句，同时也不能访问除了`Math`，`Date`等全局白名单之外的全局变量

## 计算属性

在Vue构造函数中使用 computed 对象声明计算属性，用法和methods类似，但是计算属性会自动构建依赖，响应式更新界面信息，同时能够缓存计算结果，计算属性默认只有getter访问器

## 监听器

    ```js
    watch: {
        question: function () {
        // do something
        }
    ```

- 这里的question是一个Vue中的Data对象的属性
  
- 当这个属性发生变化的时候会触发这个函数

## 列表渲染

- 渲染数据为数组
  - (value,index,arr) in arr  
- 渲染数据为对象
  - (value,propoty,index) in obj

## 模板

- **组件内只能有唯一个根节点，多余的根节点会被忽略**
  
- **Vue创建的组件默认为全局组件**

1. 使用字符串模板

        ```js
        const home = {
            el:"#app",
            template:"<p>这里测试模板</p>"
            }
        // 这样使用字符串的模板可以覆盖掉html当中包含#app的节点    这个方式不推荐
        ```

2. 使用Vue定义模板

        ```html
            <div id="app">
                <template-name>
            </div>
            <script>
                Vue.component("template-name",{
                    template:"<p>组件内容</p>",
                })
                // 以上方式定义的组件名可以写在HTML当中，但是该HTML必须时Vue实例
                Vue({
                el:"#app"
                })
            </script>
        ```

3. 局部组件

        ```js
            const mycomponent = {
                template:"<p>这是一个组件</p>"
            }
            Vue({
                el:"#app",
                components:{
                "my-component":mycomponent
                }
            })
            // mycomponent  是之前定义的组件
            // my-component 是该组件的名称  使用 <my-component></my-component> 使用
        ```

## 其它

### 钩子

- 钩子？    中间件？
- 在应用的生命周期当中添加一些自定义的代码，例如WEB常见的`document.onRead`等，在一个特定的时间添加执行的函数。
- Vue内置的钩子有:
  - **在生命周期的钩子当中，其`this`上下文指向调用它的vue实例，所以在需要使用`this`关键字的时候不要使用箭头函数**
  
  - beforeCreate

  - created

  - beforeMount

  - mounted

  - beforeUpdate

  - updated

  - beforeDestroy
v
  - destroyed

### 术语

- 命令式
v
  - 命令式的语法，就像`Jquery`一步一步的指定样式、指定操作

- 声明式

  - Vue属于声明式的语法，它修改元素不需要一步步的指定详细操作，而是维护一种状态，其操作细节由Vue自己完成

- 渐进式

  - 渐进式允许部分引入而不需要使用全家桶套餐，可以在已有的项目中，部分引入

- SEO

  - SEO（Search Engine Optimization）,利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。目的是让其在行业内占据领先地位，获得品牌收益
