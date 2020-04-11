var module_export = require("./3.1-modules.export");
// var export_obj = require("./3.2-export.js");


var modul = new module_export("tom",12);
var modul1 = new module_export("tony",12);


// 类的内部变量属于这个类，这个类创建的对象都共享这个变量的值,类创建对象的时候初始化对象的值为每个对象特有的
// modul.getName();
// modul1.getName();
// modul.log();
// modul.log();
// modul.log();
// modul.log();
// console.log("\n");
// modul1.log();
// modul1.log();
// modul1.log();


// 无论是导出对象还是导出类  原来的模块都相当于一个闭包，里面的变量依然可以访问
// 模块里面的代码会执行一次 但是不会执行函数内部


// export_obj.log();
// export_obj.log();
// export_obj.log();
// modul.log();
// modul.log();
