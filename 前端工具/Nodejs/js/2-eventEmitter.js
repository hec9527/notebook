var event = require("events");

var eventEmitter=new event.EventEmitter();

var handler_connecting = function(){
    console.log("链接成功！");
    // 手动触发事件
    eventEmitter.emit("data_received");
}

// 绑定事件处理
eventEmitter.on("cnn",handler_connecting);

// 使用匿名的方式绑定处理函数
eventEmitter.on("data_received",function(){
    console.log("成功接收数据!");
})

// 这里的事件名称可以任意的   后面还可以加参数
eventEmitter.emit("cnn");
console.log("Programe run over!");

