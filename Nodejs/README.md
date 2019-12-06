# NodeJS 
运行在服务端的`javascript`，基于事件驱动，基于V8引擎
`nodejs`适合用于开发需要处理大量的并发的输入/输出，并且不需要进行非常复杂的处理的时候


# 事件循环
*   nodeJS 单线程单进程，依托于异步回调处理高并发
*   NodeJS 几乎每一个API都有回调函数


# NPM
npm是一个node的包管理工具
| 操作                             | 作用                                                       |
| -------------------------------- | ---------------------------------------------------------- |
| `npm -v`                         | 查看系统版本                                               |
| `npm install <Module Nmae> -g`   | 安装模块  -g 全局安装到npm的 node_Module目录下             |
| `npm install`                    | 如果不带参数则自动安装当前目录下的`package.json`里面的依赖 |
| `npm uninstall <Module Name> -g` | 卸载全局环境模块                                           |
| `remove un unlink re r`          | `uninstall` 的别名                                         |
| `npm list -g`                    | 查看全局安装的模块                                         |
| `npm list <Module Name>`         | 查看模块的版本号                                           |
| `npm view <Module name>`         | 查看某一个包的`package.json`文件                           |
| `npm update <Module Name>`       | 更新模块                                                   |
| `npm search <Module Name>`       | 搜索模块                                                   |
| `npm root -g`                    | 查看模块的路径  -g 全局模块的路径                          |
| `npm config set prefix <path>`   | 修改npm全局的安装路径                                      |
**window系统下，`C:\Users\admin`目录下有一个`.npmrc`的隐藏文件用于设置全局模块的安装路径**

# package.json
`package.json`位于模块的目录下，用于定义包的属性，可以使用`npm init`自动生成                                       |
| 属性         | 描述                                                                    |
| ------------ | ----------------------------------------------------------------------- |
| name         | 包名                                                                    |
| preferglobal | 是否支持全局安装                                                        |
| main         | 程序的主入口文件                                                        |
| version      | 版本号                                                                  |
| description  | 描述                                                                    |
| homepage     | 包的官网                                                                |
| author       | 包的作者数组，每个可以包含`name`, `Email`, `web`字段                    |
| maintainers  | 包的维护者信息数组 同上                                                 |
| bugs         | bug的提交地址，可以是网址也可以是email地址                              |
| license      | 许可证数组，每个元素应该包含type(许可证名称),url(许可证URL)             |
| contributors | 包的贡献者姓名                                                          |
| dependencies | 依赖包的数组，包含包名以及版本号                                        |
| repository   | 托管仓库地址，每个元素包含type(仓库类型:git),url,path(相对于仓库的地址) |
| keywords     | 关键字数组，用于搜索                                                    |


# 案例
```
    {
        "name": "nodeppt-parser",
        "version": "2.1.2",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [
            "markdown-it",
            "nodeppt",
        ],
        "author": {
            "name": "Theo Wang",
            "email": "ksky521@gmail.com"
        },
        "repository": {
            "type": "git",
            "url": "git://github.com/ksky521/nodeppt"
        },
        "license": "MIT",
        "dependencies": {
            "markdown-it": "^8.4.2",
            "markdown-it-sup": "^1.0.0",
        }
    }
```


# 交互式终端
在cmd输入`node`启动终端，类似于`python`有文本方式以及交互方式   
在终端中可以使用`_`获取上一个表达式输出，其它类似于浏览器的js控制台，深拷贝原来的结果，修改不受影响  

| 操作             | 效果                                 |
| ---------------- | ------------------------------------ |
| 连续两次`Ctrl+C` | 退出`Node REPL`                      |
| `Ctrl+D`         | 退出`Node REPL`                      |
| 上下按键         | 查看历史命令                         |
| `Tab`            | 列出当前命令                         |
| `.help`          | 查看帮助命令                         |
| `.break`         | 退出多行表达式                       |
| `.clear`         | 退出多行表达式、清除上下文           |
| `.exit`          | 用于退出当前REPL环境                 |
| `.save FileName` | 将当前`Node REPL` 会话保存在指定文件 |
| `.loca FileName` | 载入会话的文件                       |


# Console --- 控制台
控制台提供了标准输入输出流，标准错误输入输出流
| 方法               | 叙述                                                                    |
| ------------------ | ----------------------------------------------------------------------- |
| `log`              | 在标准输出流输出信息，可以在`REPL`环境中使用重定向到文本                |
| `error`            | 标准错误输出流的输出，用法于`log`完全相同                               |
| `dir`              | 用于查看一个对象的内容并且输出到标准输出流                              |
| `time(label)`      | 用于和`timeEnd(label)`方法搭配使用，记录一段代码的运行时间，单位:ms     |
| `timeEnd(label)`   | 用于和`time(label)`方法搭配使用，记录一段代码的运行时间，单位:ms        |
| `trace(msg)`       | 用于将当前的栈信息作为标准错误输出进行输出，`msg`是错误输出时的提示信息 |
| `assert(condtion)` | 用于对一个表达式进行判定，如果结果为`false`则抛出`AssertionError`       |


# 全局变量
在`node`中有一个全局变量`global`，所有的全局变量，函数都是它的一个属性，类似于浏览器js中的`window`对象    
## 其它全局变量
| 变量名     | 叙述                                       |
| ---------- | ------------------------------------------ |
| __filename | 用于获取当前模块的文件名（注意两个下划线） |
| __dirname  | 用于获取全面模块的文件路径                 |


# 定时器
## setTimeOut(callBack,time,args)
*   第一个参数为回掉函数
*   第二个参数为指定回调的时长，最大值为2147483647，超过则置为1
*   第三个及以后的参数为回调函数的参数
*   返回值是一个定时器对象
## clearTimeOut(obj)
*   可以清除一次性定时器`setTimeOut`，但是需要将定时器保存在变量中，然后传递给`celarTimeOut`
## setInterval(callback,time,arg)
*   用法类似于`setTimeOut`但是这个定时器是周期性调用回掉函数
## clearInterval(obj)
*   用于清除`setInterval`定时器，用法同`setTimeOut`
## 定时器对象的`unref`于`ref`
*   `unref` 用于取消定时器的回调函数，但是定时器对象依然存在
*   `ref`   用于回复定时器的回调函数
*   **值得注意的是，过多使用这两个方法对浏览器的性能有影响** 


# linux权限问题
在linux中，js监听40或443端口提供HTTP服务时，需要root权限  
### 方案一
    <!-- 使用该方法可以确保只有这一个脚本以root方式运行 -->
    sudo node server.js
## 方案二
    <!-- 该方案会导致所有nodejs脚本都以root方式运行，不安全 -->
    sudo chown  root /usr/local/bin/node
    sudo chmod +s /usr/local/bin/node


# 模块
##  模块的属性
| 属性              | 叙述                                                       |
| ----------------- | ---------------------------------------------------------- |
| `module.id`       | 模块的`id`,主模块的`id`为`.`，其它模块的id为文件的绝对路径 |
| `module.filename` | 当前模块的文件名                                           |
| `module.loaded`   | 当前模块是否已经加载                                       |
| `module.parent`   | 当前模块的父级模块，即加载当前模块的模块                   |
| `module.children`  | 当前模块已经加载的其他所有模块的数组                       |


## 三个`require`的全局函数
#### `require.main()`
在`nodejs`当中存在一个变量，用于检测一个模块是否为程序中的主模块，类似于`python`中的`name==__main__`，用法如下： 
```
    if(module === require.main){
        //some code
    }
```

#### `require.resolve()`
用于查询一个模块带文件名的完整路径

#### `require.cache()`
查看所有已经加载的模块，结果为键值对的形式    
使用 `delete require.cahcae([key])`可以删除某一个已经缓存的模块


## NodeJs内置模块 (V0.10)

| 模块名        | 模块功能                                | 稳定程度            |
| ------------- | --------------------------------------- | ------------------- |
| assert        | 常用语单元测试的添加断言处理            | 5 (稳定不修改)      |
| buffer        | 用于实现二进制数据的存储与转换          | 3 稳定              |
| child_process | 实现子进程的创建与管理                | 3                   |
| cluster       | 用于实现多进程                          | 1 (实验阶段)        |
| console       | 用于控制台输出信息                      | 4(稳定 Api不再修改) |
| crypto        | 用于实现数据的加密解密                  | 2 (不稳定)          |
| debugger      | 内置调试器                              | 3 (稳定)            |
| dns           | 实现与处理DNS                           | 3                   |
| domain        | 用于实现多个I/O的协作处理               | 2                   |
| events        | 事件处理的基础类                        | 4                   |
| fs            | 用于操作文件以及文件系统                | 3                   |
| http          | 用于实现http服务端以及客户端            | 3                   |
| https         | 用于实现https服务器端于客户端           | 3                   |
| net           | 用于创建TCP服务器与客户端               | 3                   |
| os            | 用于获取操作系统信息                    | 4                   |
| path          | 用于处理文件路径                        | 3                   |
| punycode      | 用于punycode字符串的编码以及解码        | 2                   |
| queryString   | 用于处理http请求                        | 3                   |
| readline      | 用于读取一行标准输入                    | 2                   |
| repl          | REPL交互式运行环境                      | 5                   |
| stream        | 用于为刘的输入/输出提供一个基础类       | 2                   |
| string_decode | 实现从二进制数据到字符串之间的转换      | 3                   |
| tls           | 使用OpenSSL 实现TLS/SSL通信             | 3                   |
| tty           | 用于获取来自TTY终端信息                 | 2                   |
| url           | 用于实现URL字符串的解析与格式化         | 3                   |
| util          | 各种常用的使用函数库                    | 5                   |
| vm            | 用于为JS脚本提供独立的运行环境          | 2                   |
| zlib          | 内部使用zli内库莱实现数据的压缩以及解压 | 3                   |

**内置的库调用不需要路径**
## 追加的库、类、函数、对象   -----  可以在不引用任何模块的情况下直接使用
| 类、对象、函数 | 描述v                                |
| -------------- | ------------------------------------ |
| Buffer类       | 用于为二进制数据的存储提供一个缓冲区 |
| setTimeOut     | 用于在指定时间后执行一个函数         |
| clearTimeOut   | 取消`setTimeOut`指定的函数           |
| setInterval    | 用于指定每隔多长时间执行一个指定函数 |
| clearInterval  | 用于取消`setInterval`函数指定的函数  |
| require        | 用于加载模块                         |
| module对象     | 用于访问模块信息                     |
| process对象    | 用于访问进程信息                     |

## 模块的内置变量
每个模块都有3个预先定义的变量
| 变量      | 描述                                                                   |
| --------- | ---------------------------------------------------------------------- |
| `require` | 在当前模块中加载别的模块，模块名可以是绝对/相对路径，可以省略后缀(.js) |
| `exports` | 当前模块的导出对象，导出模块的属性以及方法                             |
| `module`  | `module`对象用于访问当前模块的相关信息，常用于替换当前模块的导出对象   |
```
module.exports=function{
    // 在每个模块里面都有   exports = module.exports= {}    导出的对象是 mudole.exports    exports只是一个别名
    // 所以导出多个对象的时候使用 module.exports ={}  而不是 exports = {} 
    // module.exports  在将模块导出为一个类的时候需要这样使用
    // 在加载模块的时候，模块里面的代码都会执行一次，但是不会执行函数内部代码
    // 类内部的变量为这个类所创建的所有对象共享
}
```

## 模块的相关概念
| 模块的名称 | 描述                                                                                               |
| ---------- | -------------------------------------------------------------------------------------------------- |
| 模块初始化 | 模块中的代码`仅执行一次`，执行之后导出模块的导出对象并缓存                                         |
| 主模块     | 程序的入口模块，用于调度其它模块                                                                   |
| json       | 后缀名为`.json`的文件                                                                              |
| 二进制模块 | 支持使用C/C++编写的二进制模块，后缀为`.node`，使用方式和js模块相同，但可以调度操作系统提供的功能   |
| 模块解析   | 内置模块无需解析，`node_Module`目录用于存放模块，解析时扫描，`NODE_PATH`环境变量规定额外的解析路径 |
| 自定义模块 | 在包里面的package.json中的`main`中指定入口模块                                                     |

## 包
多个子模块组合成的大模块成为`包`，并且把所有子模块存放在同一目录下
导入这个大模块需要导入这个模块的入口模块，如果入口模块文件名为`index.js`则可以省略文件名,
保留路径每一个包里面都应该`package.json`文件

## 命令行程序
将程序修改成为直接在命令行调用而无须先调用解释器的形式   
在程序的第一行添加 `#! /usr/bin/env node` 
   

# 工程文件夹
```
- /home/user/workspace/node-echo/   # 工程目录
    - bin/                          # 存放命令行相关代码
        node-echo
    + doc/                          # 存放文档
    - lib/                          # 存放API相关代码
        echo.js
    - node_Module/                 # 存放三方包
        + argv/
    + tests/                        # 存放测试用例
    package.json                    # 元数据文件
    README.md                       # 说明文件
```


# EventEmitter 类
`nodeJs`当中实现各种事件处理`event`模块中定义的一个类，用于对象事件处理函数的绑定以及解除   
| 方法名与参数                   | 描述                                                                          |
| ------------------------------ | ----------------------------------------------------------------------------- |
| addListener(event,callback)    | 对指定事件添加处理函数，事件是字符串，可以自定义。                            |
| on(event,callback)             | 同上，addListener的别名，可以多次使用绑定多个处理函数                         |
| once(event,callback)           | 绑定一次事件，触发后解除                                                      |
| removeListener(event,callback) | 解除指定时间的绑定函数                                                        |
| removeAllListener([event])     | 解除指定对象的所有事件处理函数                                                |
| setMaxListener(n)              | 用于指定同一事件处理函数的最大值，n为整数，代表最大可绑定的事件处理函数的数量 |
| listener(event)                | 获取指定事件的所有事件处理函数，返回该事件绑定的所有处理函数的数组            |
| emit(event,arg)                | 手动触发事件，从第二个其为处理函数的参数                                      |

*EventEmitter类，自身拥有一个`listenerCount`方法，用于获取指定对象指定事件处理函数的数量*   
useage:
```
    EventEmitter.listenerCount(emitter, event)
```
*   emitter : 对象
*   event ：事件

## EventEmitter类自身的事件
| 事件             | 叙述                                             |
| ---------------- | ------------------------------------------------ |
| `newListener`    | 继承`EventEmitter`类的子类实例对象绑定事件时触发 |
| `removeListener` | 继承`EventEmitter`类的子类实例对象解除事件时触发 |
**以上类自身事件绑定的处理函数接收两个参数，1：事件名称；2：事件的处理函数名称**


# Buffer类
这是一个全局类，可以在任何地方创建对象，主要用于对二进制数据进行处理
## 构造函数
| 构造方法                    | 说明                                            |
| --------------------------- | ----------------------------------------------- |
| `new Buffer(size)`          | 创建一个指定大小的缓冲区   (弃用)               |
| `new Buffer(arr)`           | 使用一个已经初始化的数组构造                    |
| `new Buffer(str[encoding])` | 使用一个字符串构造，可以指定编码方式，默认 uft8 |
*以上的构建方式因为安全以及性能问题不推荐使用，替代：`Buffer.alloc`, `Buffer.allocunsafe`, `Buffer.from`*












## Buffer类对象的方法
| 方法                      | 说明                                        |
| ------------------------- | ------------------------------------------- |
| fill(value[,start][,end]) | 使用value值填充对象，可以指定开始，结束位置 |


# Js中可用的编码方式
* ASCII
* UTF-8
* UFT-16LE
* UCS2
* BASE64
* binary  (不推荐使用二进制)
* hex  (16进制)


# 发布代码
| 操作                    | 命令                                                     |
| ----------------------- | -------------------------------------------------------- |
| 注册账号                | npm adduser                                              |
| 新建`packeage.json`文件 | 加入必须字段`name`,`version`,`dependencies`,`main`,`bin` |
| 发布                    | npm publish                                              |


# 版本号管理
语义化版本号`X·Y·Z`   
| 版本号 | 叙述                     |
| ------ | ------------------------ |
| X      | 大的版本改动且不向下兼容 |
| Y      | 新增功能但是向下兼容     |
| Z      | bug修复                  |

