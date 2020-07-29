/**
 * @author   hec9527
 * @time     2020-2-18
 * @change   2020-2-18
 * @description
 *
 *   简单模仿 Vue-router
 */

/**
 * @param {DOM} DOM 挂载dom节点
 * @param {object} Option  路由配置表
 */
class MyRouter {
    constructor(dom, config = []) {
        this.config = config;
        this.routers = {}; // 存放每个路由对应的处理函数
        this.couterThis = {};
        this.history = [];
        this.view = dom.getElementsByClassName('router-view')[0];

        window.addEventListener('hashchange', () => this.routerChange());
        this.init();
    }

    init() {
        this.config.forEach(item => {
            const callback =
                item.redirect !== undefined
                    ? () => (window.location.hash = item.redirect)
                    : item.component;
            this.register(item.path, callback);
        });
        window.location.hash = '/';
    }

    register(hash, callback = () => {}) {
        this.routers[hash] = callback;
    }

    routerChange() {
        const hash = window.location.hash.slice(1);
        if (this.routers[hash] === undefined) {
            return alert(`未注册的路径：${hash}`);
        }

        Reflect.ownKeys(this.routers).forEach(item => {
            if (hash === item) {
                this.view.innerHTML = this.routers[item]();
                this.history.push(item);
            }
        });
    }
}

// Vue的路由表
const routes = [
    {
        // hash为空的时候
        path: '/',
        name: 'root',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => `<div class='router-section home'>home</div>`
    },
    {
        path: '/category',
        name: 'category',
        component: () => `<div class='router-section category'>category</div>`
    },
    {
        path: '/bing',
        name: 'bing',
        component: () => `<div class='router-section bing'>bing</div>`
    },
    {
        path: '/daily',
        name: 'daily',
        component: () => `<div class='router-section daily'>daily</div>`
    },
    {
        path: '/indiv',
        name: 'individual',
        component: () => `<div class='router-section indiv'>individual</div>`
    }
];

// 挂载点
const dom = document.getElementById('router');
new MyRouter(dom, routes);
