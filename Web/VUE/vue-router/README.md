# Vue-router




# 创建Vuerouter
1. 创建组件
```js
    const home = {component:"<p>主页信息</p>"}
    const news = {component:"<p>新闻页面</p>"}
```
2. 创建路由表
```js
    const routerTable = [
        {path:"/home",component:home},
        {path:"/news",component:news},
        {path:"/",redirect:"/home"}   // 默认路由地址
    ]
```
3. 创建路由对象（挂载路由表到路由对象）
```js
    const router = new VueRouter({
        routes = routerTable,    // routerTable变量名为routes 的时候   可以简写为  routes
    })
```
4. 创建Vue实例（挂在路由对象到Vue实例）
```js
    new Vue({
        el:"#app",
        router,    // 简写  router: router,  ES6语法糖
    })
```
5. dom结构
```js
    <div id="app">
        <router-link to="/home">主页</router-link>
        <router-link to="/news">新闻页</router-link>
        <router-view></router-view>
    </div>
```



## 子路由
1. 在路由的模板里面添加新的路由 `<router-link></router-link>`
2. 