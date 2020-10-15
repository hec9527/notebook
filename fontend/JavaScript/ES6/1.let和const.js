// ES6中新增的变量修饰符
// let 可以修改  const 定义常量不能修改
// let 、 const 不能重复定义一个变量
// let 、 const 存在“暂时性死区”  即在变量定义之前使用变量会报错
// 声明变量共6种方法： var  function let  const  import class


// 全局属性
// 使用var 在顶级作用域的变量属于全局属性和顶级对象  可以使用  window.a  或者  global.a 访问到
// 使用let const 声明的变量属于全局属性但是不属于顶级对象


console.log("------  暂时性死区  ------")
try {
    console.log(i);
    let i;
} catch (error) {
    console.log(`在暂时性死区当中读取变量会报错  ${error}`);
}
try {
    i = 1;
    let i;
} catch (error) {
    console.error(`在暂时性死区当中修改变量会报错  ${error}`);
}
try {
    console.log(typeof i);
    let i = 1;
} catch (error) {
    console.error(`在暂时性死区中查看数据类型会报错${error}`);
}
// 注意有很多中隐蔽的暂时性死区


console.log("\n\n\n------  不允许重复声明    -------");
// try {
//     let a = 1;
//     var a = 2;
// } catch (error) {
//     console.error(`重复声明变量报错${error}`);
// }
// (function foo(arg) {
//     try {
//         let arg = 1;
//     } catch (error) {
//         console.log(`重复申明参数报错${error}`);
//     }
// }());

console.log("重复声明查看源码，执行结果会影响到后续执行");


console.log("-----    函数的块级作用域    -----");
if (true) {
    function foo() {
        console.log("func foo");
    }
    foo()
}
try {
    foo()
} catch (error) {
    console.log("无法访问块级作用域中的函数");
}
// 不同的环境实现不一样    有的会函数整体提升  将函数放置到顶级作用域当中







