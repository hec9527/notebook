/**
 * @author   hec9527
 * @time     2020-2-12
 * @change   2020-2-14
 */

class MyRouter {
    constructor(defaultPath = 'home') {
        this.el = document.getElementById('router');
        this.link = this.el.getElementsByClassName('router-link');
        this.view = this.el.getElementsByClassName('router-section');
        this.history = [defaultPath];
        this.routerChange();
        window.location.hash = defaultPath;

        // 路由监听
        window.addEventListener('hashchange', () => this.routerChange());
    }

    routerChange() {
        let mapPath = false; // 成功匹配路由？

        Array.from(this.view).forEach(item => {
            const hash = item.getAttribute('data-path');
            if (hash === window.location.hash.slice(1)) {
                item.classList.add('section-this');
                this.history.push(hash);
                mapPath = true;
            } else {
                item.classList.remove('section-this');
            }
        });

        Array.from(this.link).forEach(item => {
            const hash = item.href.split('#')[1];
            if (hash === window.location.hash.slice(1)) {
                item.classList.add('router-this');
            } else {
                item.classList.remove('router-this');
            }
        });

        if (!mapPath) {
            const msg = `路由匹配错误：${window.location.hash}`;
            console.error(msg);
            new Toast(msg);
            window.location.hash = this.history.pop();
        }
    }
}

class Toast {
    constructor(message, timeout) {
        this.message = message;
        this.timeout = timeout || 2000;
        this.el = this.initEl();
        this.mount();
    }

    initEl() {
        const el = document.createElement('div');
        el.classList.add('toast');
        el.classList.add('fade-in');
        el.innerHTML = this.message;
        return el;
    }

    mount() {
        if (Toast.instance) {
            Toast.instance.destory();
        }

        Toast.instance = this;
        this.timer = setTimeout(() => {
            this.destory();
        }, this.timeout);
        document.getElementsByTagName('body')[0].appendChild(this.el);
    }

    destory() {
        Toast.instance = null;
        clearTimeout(this.timer);
        document.getElementsByTagName('body')[0].removeChild(this.el);
    }
}

new MyRouter('home');
