# CommonJS规范

- 一个文件就是一个模块，它有自己的作用域，文件内部定义的变量、函数、类都是私有的

- 模块可以多次加载，但是只会在第一次运行时缓存，后续引入则直接读取缓存

- 每一个模块内部都有一个module对象，代表当前模块

| 模块属性          | 说明                                                                       |
| ----------------- | -------------------------------------------------------------------------- |
| `module.id`       | 模块的识别符，通常是带有绝对路径的模块文件名。                             |
| `module.filename` | 模块的文件名，带有绝对路径。                                               |
| `module.loaded`   | 返回一个布尔值，表示模块是否已经完成加载。                                 |
| `module.parent`   | 返回一个对象，表示调用该模块的模块。从命令行运行则为`null`                 |
| `module.children` | 返回一个数组，表示该模块要用到的其他模块。                                 |
| `module.exports`  | 表示模块对外输出的值。                                                     |
| `exports`         | 系统定义的一个变量`export = module.export`，当改变引用之后，不在是导出对象 |

## 导出

- 使用`exports.xxx` 和使用`module.exports.xx`效果是一样的

```javascript
    exports.foo = function (params) {
        // do something
    }
    // 这个和以上写法一致的
    module.exports.foo = function (params){
        // do something
    }
    // 这样写也可以
    module.exports = {
        foo(params){
            // do something
        }
    }
```

## 导入

- 导入使用`require()`函数完成，默认加载文件后缀为`.js`

- 导出的是值的缓存，即复制了一份

- `require.main === module` 为真时，表示：模块从命令行执行，否则被require()加载

```javascript
    // export.js
    let a = 1;

    setTimeout(() => {
        a=2;
        console.log(a);
    }, 2000);

    module.exports = a;

    // import.js
    const a = require("export.js");
    console.log(a);
    setTimeout(() => {
        console.log(a);
    }, 2000);

    // output
    // 1, 2, 1,
```

## `CommonJS` 和 `AMD` 规范的兼容

- `CommonJS`主要同步加载模块用于`nodejs`环境，`AMD规范`异步加载模块用于浏览器环境

- `AMD规范`使用`define`函数定义模块

```javascript
    define(['package/lib'], function(lib){
        function foo(){
            lib.log('hello world!');
        }

        return {
            foo: foo
        };
    });
```

- 兼容`CommonJS`的写法

```javascript
    define(function (require, exports, module){
        var module1 = require("someModule");
        var module2 = require("anotherModule");

        module1.doTehAwesome();
        module2.doMoarAwesome();

        exports.asplode = function (){
            someModule.doTehAwesome();
            anotherModule.doMoarAwesome();
        };
    });

```

## 缓存

- 模块加载后的缓存存放在`require.cache`对象中

- 删除缓存

```javascript
    //  删除一个缓存
    delete require.cache['xxxx']

    // 删除全部缓存
    Object.keys(require.cache).forEach(key=> {
        delete require.cache[key];
    })
```
