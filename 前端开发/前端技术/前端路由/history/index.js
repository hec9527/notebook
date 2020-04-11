/**
 *     非常 hack 的方法
 *
 *     观察者模式  +  手动事件
 *
 */

// // 观察者模式
// function observe(obj, callBack = () => {}) {
//     return new Proxy(obj, {
//         set(target, key, value, receiver) {
//             const result = Reflect.set(target, key, value, receiver);
//             callBack(result, key, value);
//             return result;
//         }
//     });
// }

// const obj = observe({ x: 1, y: 2 }, () => console.log('change it'));

// // 路由模块
// class Routers {
//     constructor() {
//         this.state = observe({}, this.emit);
//         this.pushState = history.pushState;
//         this.replaceState = history.replaceState;

//         window.addEventListener('onhistorystatechange', () =>
//             this.handlerStateChange()
//         );
//     }

//     // 手动触发事件
//     emit() {
//         const event = new Event('onhistorystatechange');
//         window.dispatchEvent(EventTarget);
//     }

//     handlerStateChange() {
//         console.log('deal status change');
//     }
// }

// const router = new Routers();

class Router {
    constructor(el) {
        this.links = el.getElementsByClassName('router-link');
        this.state = {};

        el.addEventListener('click', e => {
            if (e.target.classList.contains('router-link')) {
                history.pushState();
            }
        });
    }
}

const dom = document.getElementById('router');
new Router(dom);
