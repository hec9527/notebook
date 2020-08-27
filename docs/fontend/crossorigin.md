# 跨域

- 由于浏览器的同源策略限制，数据是不能直接跨域访问的

- 同源策略是指：相同协议、相同域名、相同端口视为同一个源，数据可以相互请求，三者任何一个不一样都不是同源。

## 常见的跨域解决方案

- JSONP

- CORS

- 降域

- window.postMessage()

- window.domain

- window.name

## JSONP

- jsonp 的核心原理就是，远端生成 js 代码，并且调用本地函数，传入参数，参数就是我们请求的数据

- jsonp 需要服务端改造

## window.name

操作过于 hack

[简书地址](https://www.jianshu.com/p/835bc9534281)

## windows.domain

只能用于有相同的基础域名的子域才行，比如`foo.baidu.com` 和 `bar.baidu.com`，可以设置`window.domain='baidu.com'`
