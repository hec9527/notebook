console.log("加载:export");

var modules_name = "这是一个对象";
var times = 0;

console.log("第", times, "次运行这个程序");


function log() {
    times++;
    console.log(modules_name);
    console.log("第", times, "次运行这个程序");
}


exports.log = log;