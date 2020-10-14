# Web Worker

> 为了解决JS单线程的性能问题，充分发挥多核CPU的优势

## 限制

- 同源限制
  - worker脚本和主线程脚本必须同源
- DOM限制
  - worker脚本不能操作DOM,window,parent等对象，但是可以操作location，navigator对象
- 通信联系
  - 通过消息通信
- 脚本限制
  - 不能使用alert，confirm方法但是可以发起Ajax请求
- 文件限制
  - worker脚本无法读取本地文件，加载的脚本必须来自网络

## 通信

- 主线程

```js
// 创建worker对象
const worker = new Worker('URL To Script')

// 主线程传递给worker数据   可以是字符串、数字、json、二进制
worker.postMessage('hello world')

// 接收数据
worker.onmessage = function (event) {
    console.log(event.data);
}

// 关闭worker
worker.terminate()
```

- 子线程

> 在子线程中，使用self代替window，所有self下面的属性、对象、方法，在访问使用时可以不用加self

```js
// 添加监听函数处理主线程的数据
self.addEventListener("message",function(e){
    console.log(e.data);
})
self.onmessage = function(e){
    console.log(e.data);
}

// 监听错误
self.addEventListener("error",function (e){ })
self.onerror(function (e){ })

// 发送数据到主线程   可以使数字字符串二进制json
self.postMessage('hello world')

// 关闭worker线程
self.close()

// 加载其它脚本 其它脚本必须来自远端
importScripts('script1.js', 'script2.js');
```
