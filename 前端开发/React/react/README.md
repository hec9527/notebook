# 引入 React

- 在浏览器端引入，需要三个文件，react核心文件，react-dom，browser
  - browser 用于解析jsx语法为js语法

```js
    <script src="../build/react.js"></script>
    <script src="../build/react-dom.js"></script>
    <script src="../build/browser.min.js"></script>
```

## 单项数据绑定

- 在state状态机中保存的变量单项数据绑定到页面，没有双向数据绑定，需要自己按需求实现

## 组件

- 首字母大戏，单一顶级标签
- 组件中`class`属性应该写成`className`，`for`应该写成`htmlFor` 因为`class`、`for`在JavaScript当中为保留字

### 组件传值

- react组件传值：在组件中使用`this.props.pro`获取指定的值，`<component key='value'/>`的方式添加
- 组件子元素，在组件中使用`this.props.childen`读取值，
  - 没有子元素的时候返回undefined，
  - 一个值的时候返回object，
  - 多个值的时候返回arrary
- 在组件中使用`React.Children.foo`来便利处理子组件，eg；

```js
    React.children.forEach(this.props.children,child=>{
        console.log(child);
    })
```

### 组件传值---类型约束

- 组件中使用`propTypes`来限定每个参数的类型，eg:

```js
    propTypes:{
        title:React.PropTypes.string.isRequired,
    }
```

### 组件属性的默认值

- 在组件中使用`getDefaultProps`设置组件的默认值，eg:

```js
    getDefaultProps:function(){
        return {
            title:"hello"   //  这里使用函数返回一个对象，则在每次调用的时候都会返回一个新的对象
        }
    }

```

### 阻止组件的渲染

- 在组件的render 函数中返回 `null` 可以阻止组件的渲染

## 获取真实DOM

- react使用虚拟dom，所以在需要操作真实dom的时候需要使用ref，类似于vue使用的ref，在组件中田间`this.refs.refvalue`获取节点

## 组件的 state

- 组件状态机
  - 初始化状态机

```js
    getInitialState:function(){
        return: {flag: true};
    }
```

- 修改组件的状态机

```js
    this.setState({flag: false});
    // 修改组件状态机之后，会自动触发render函数
    // this.props用于定义之后不再改变的变量，但是this.state用于交互之后会改动的属性
```

## 组件的生命周期

- 组件的生命周期包含 `component + <Will/Did> + <Mount/Update/Unmount>`
- 没有`componentDidUnmount` , 都已经卸载了就没办法再执行
- `componentWillReceiveProps`， 已经加载的组件添加新的参数
- `shouldComponentUpdate`，在组件更新之前判断，优先于`componentWillMount`,返回布尔值

## 列表渲染

- 列表渲染采用map等遍历要处理的列表，生成 react元素
- 列表渲染需要给每个列表元素添加一个唯一的key属性，如果将列表元素封装为组件，则应该添加在组件的prop上面，而不是组件里面
- 列表的key，不应该使用index，当改变数组的时候，index也会改变
- 列表的key，在兄弟节点当中应该是唯一的，在全局当中可以不是唯一的
- 列表的key，会传递给react但是不会传递给组件，如果组件中需要用到这个属性，用别的名字代替

## 受控组件

- 组件的操作受到React的控制，屏蔽其默认行为，同时可以使用value属性很方便的获取它的值
- file 是非受控组件， value属性是只读的

## 状态提升

- 多个组件当中需要用到相同的数据的时候，可以将数据提升到父级组件当中，然后通过 prop 传递给子组件使用

## 组合

- react中的组件可以组合、嵌套，外层组件中需要有 {props.children} 作为占位的插槽
- 一个占位的插槽可以添加多个子组件，

## API

### ReactDOM.render(content,node)

- content 为渲染到页面的内容，支持jsx，引号内的内容不解析为html，node为渲染dom的挂载点

- content中可以包含数组对象，直接全部渲染到页面上，在jsx语法中引用js变量使用 `{}` 语法
