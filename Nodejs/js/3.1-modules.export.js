console.log("加载模块：modules.exports");

var modules_name = "这是一个类";
var times = 0;

console.log("第", times, "次运行这个程序");


var Foo = function (name, age) {
    name = name;
    age = age;
    console.log("类初始化");
    this.getName=function(){
        console.log(name);
    }
}


Foo.prototype.log = function () {
    times++;
    // console.log("第", times, "次运行这个程序");
    console.log("类内部变量--times:", times);
}


module.exports = Foo;