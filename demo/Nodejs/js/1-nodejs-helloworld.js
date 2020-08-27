// 使用 require 引入模块
var http = require("http")

// 创建服务器应用程序
http.createServer(function (requests, response) {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });

    response.end("hello world!");
}).listen(8008);  // 监听8008端口

console.log("Server running at http://127.0.0.1：8008")