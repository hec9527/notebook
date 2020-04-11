# Vuex

## 没有vuex的时候，组件之间传值很麻烦

- **对于共享的数据才需要存放到vuex中，组件自由的数据直接存放在data中即可**

| 传值类型       | 传值方式 |
| -------------- | -------- |
| 父传递子       | v-bind   |
| 子传递父       | v-on     |
| 不相干组件传值 | EventBus |

## Vuex的使用

- **推荐将Vuex单独写为一个模块**

- 安装依赖

```shell
npm install vue --save
npm install vuex --save
```

- 引入

```js
import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex)
```

- 创建vuex对象

```js
const store = new vuex.Store({
    state:{
        count:0
    },
    actions:{},
    mutations:{
        // 每一个mutation函数都有2个参数，第一个state，第二个为调用时传递的参数
        add(state, data){
            state.count += data
        }
    },
    getters:{}
})
```

- 挂载vuex

```js
new Vue({
    el:"#app",
    store:store,
    router:router,
    render:h=>h(app)
})
// 其它组件可以使用 this.$store 获取该实例
```

## **state**

- state，提供唯一公共数据源，所有共享数据都需要放到store中的state进行存储

### 组件中使用 `state` 中的值

- 组件中使用 `this.$store.state.property`访问
- 通过`mapState`映射为当前组件的`computed`计算属性
  - 从 `vuex` 中按需导入 `mapState` 函数

    ```js
    import {mapState} from 'vuex'
    // 记得加花括号  --- 解构
    ```

  - 在当前组件计算属性 `computed` 中映射当前组件的计算属性

    ```js
    computed:{
        ...mapState(['property1','property2',...])
    }
    // mapState 返回的是全局属性的值 ，使用 ...解构为computed的属性
    ```

## commit

- 组件中使用`this.$store.commit()`触发`mutation`

## mutation

- ***`vuex` 中使用 `mutation` 修改 `state` 中的数据***
- `mutation`中不能使用异步代码，否则会导致数据无法追踪，异步任务使用`action`
- 在组件中使用`this.$store.commit('mutation_type', data)`来修改`state`
- 触发`mutation`的第二种方式

    ```js
    import { mapMutations } from 'vuex';
    // 从vuex中，按需导入 mapMutations
    // 通过 mapMutations 函数，将需要的mutation函数映射为当前组件的方法
    methods:{
        ...mapMutations(['mutation_func1','mutation_func2',...])
    }
    // 映射之后可以像调用组件的函数一样调用mutation
    ```

## action

- `mutation`中不应该使用异步代码，异步操作使用`action`中，在`action`中执行完后调用`mutation`
- ***触发`action`使用`dispatch`***

```js
    // 组件中
    this.$store.dispatch("add",5);
    // store中
    mutations:{
        add(state,payload){
            state.count += payload
        }
    },
    actions:{
        add({commit}, payload){
            setTimeout(() => {
                commit("add",payload)
            }, 1000);
        }
    }
```

- 触发 `action` 的第二种方式

```js
    // 从vuex中按需引入 mapActions
    import { mapActions } from 'vuex';

    // 将 actions 映射为组件的方法
    mathods:{
        ...mapActions(['action1','action2'])
    }
    // 映射之后，在组件中可以像使用组件自己的方法一样调用action函数
```

## Getter

- 用于对store中的数据进行加工处理，并且返回新的数据(类似于计算属性)，但是不会修原来的数据
- 当state中的数据修改之后，getter返回的数据也会跟着改变

```js
const store = new vuex.Store({
    state:{
        bookName: "JavaScript",
        bookNums: 3000
    },
    getters:{
        bookNums(state){
            return `${state.bookName}当前剩余: ${bookNums}本`
        }
    }
})
```

- 调用 `getter`
  - 第一种方式

    ```js
    // 组件中调用
    this.$store.getter.func()
    ```

  - 第二种方式

    ```js
    // 从vuex中按需导入
    import { mapGetters } from 'vuex';

    // 将getters 函数映射为组件的方法
    methods:{
        ...mapGetters(['getter1','getter2',...])
    }
    // 映射之后，store的getter可以在组件中像自己的方法一样调用
    ```
