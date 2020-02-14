/**
 * @author   hec9527
 * @time     2020-2-12
 * @change   2020-2-14
 */

class MyRouter {
    constructor() {
        this.el = document.getElementById('router');
        this.link = this.el.getElementsByClassName('router-link');
        this.view = this.el.getElementsByClassName('router-section');
        this.history = [];

        // 事件委托
        this.el.addEventListener(
            'click',
            e => {
                // 路由跳转
                if (e.target.classList.contains('router-link')) {
                    window.location.hash = e.target.dataset.path;
                    Array.from(this.link).forEach(item => {
                        if (item === e.target) {
                            item.classList.add('router-this');
                        } else {
                            item.classList.remove('router-this');
                        }
                    });
                }
            },
            true
        );

        // 路由监听
        window.addEventListener('hashchange', e => {
            let mapPath = false; // 匹配到路由？
            this.history.push(e.newURL);
            Array.from(this.view).forEach(item => {
                const path = item.getAttribute('data-path');
                if (path === window.location.hash.slice(1)) {
                    item.classList.add('section-this');
                    mapPath = true;
                } else {
                    item.classList.remove('section-this');
                }
            });
            if (!mapPath) {
                console.error(
                    `未找到hash路径对应页面：${window.location.hash}`
                );
                window.location.hash = 'home';
            }
        });

        // call it
        this.init();
    }

    init() {
        this.link[0].classList.add('router-this');
        this.view[0].classList.add('section-this');
        window.location.hash = this.link[0].getAttribute('data-path');
    }
}

new MyRouter();
