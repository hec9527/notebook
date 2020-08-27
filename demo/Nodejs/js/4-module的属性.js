var fs = require("fs");
var http = require('http');

// 查看或者设置当前模块的ID
// 一般来说主模块的ID为.  其它模块的ID为文件的绝对路径
// 主模块为启动的模块
console.log("module.id:", module.id);


// 当前模块的文件名
console.log("module.filename:", module.filename);


// 当前模块是否已经加载
console.log("module.loaded:", module.loaded);


// 当前模块的父级模块，即调用当前模块的模块
console.log("module.parent:", module.parent);


// 当前模块的子模块，即当前模块中已经加载的其他所有模块的数组
console.log("module.children:", module.children);