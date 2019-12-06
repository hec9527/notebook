# 安装
```
    npm install log4js
```


# 三大重要组件
| 名称     | 作用               |
| -------- | ------------------ |
| Logger   | 控制输出日志的内容 |
| Appender | 控制日志输出的位置 |
| Layout   | 如何输出日志       |

# 日志分级   
日志分级，输入大于等于指定的等级的日志  

ALL 输入所有日志文件  

OFF 所有日志文件都不输出

*   ALL 
*   TRACE
*   DEBUG
*   INFO
*   WARN
*   ERROR
*   FATAL
*   MARK
*   OFF

# 分类
用于指定日志实例的别名，可以很容易的在日志文件中过滤出某一个实例输出的内容
```
    let logger = log4js.getLogger("王尼玛");
```

# 配置log4js
```javascript
    // 配置文件为字符串或者一个对象
    // string: 应该是包含日志输出文件的路径
    log4js.configuration(object|string)
    // 对象配置说明
    log4js.configure({
        levels: { // 可选值
            "INFO": { // 指定对应的日志级别
                value: 10, //日志级别 的 数值
                colour: "grey", // 日志级别对应的颜色    
                // 可选颜色 ：white, grey, black, blue, cyan, green, magenta, red, yellow
            },
            "DEBUG": { // 可以为每一个级别指定自定义的数值及颜色
                value: 20,
                colour: "blue",
            }
        },
        appenders: {        // 必须值，用于定义输出的配置信息
            out: {           // 必须至少定义一个输出配置
                type: 'console',
                layout: {
                    type: 'colored'
                }
            },
            out1: { // 其它的可选配置 ，多个输出配置可同时输出到不同地方
                type: "file",    // 需要配置 filename 以及pattern  
                filename: "ff.log",
                // pattern:"-yyyy-mm-dd.log",
                layout: {
                    type: "basic"
                }
            }
        },
        categories: { //  确定需要使用的配置信息 
            default: { // 实例的别名，可以是任意合法字符串   在log4js.getLogget("xx")调用
                appenders: ['out', 'out1'], // 包含 appenders 的字符串列表
                level: 'info', // 设置输出的最低级别
                enableCallStack: true, // 是否开启调用栈信息
            }
        }
    });
```




# 更改布局
```javascript
    log4js.configure({
        // 定义输出日志的格式以及类型
        appenders: { 
            out: { 
                type: 'stdout',
                layout: { 
                    type: 'basic' 
                } 
            }},
        // 配置输出
        categories: {
            default: {
                appenders: ['out'],
                level: 'info'
            }
        }
    });
```
*   `stdout`用于指定输出的位置 可选值有：
    *   stdout      --- 标准输出流
    *   stderr      --- 标准错误输流
    *   console   ---- 日志输出到控制台
    *   file      ---- 需要与filename :"f.txt"搭配使用
    *   dateFile   --- 需要与filename、pattern 搭配使用  输出文件名 = filename +pattern
    *   levelFilter    过滤筛选   可以筛选出指定分级以上的日志，，以及指定的`categroy`分类

*   `type`用于指定输出类型
    *   basic   基本类型   时间 级别 分类 信息
    *   colored  彩色类型  输出格式同上，但是每一种级别的日志都有自己的颜色
    *   messagePassThrough   消息传递    只输出消息，而不输出其它任何信息
    *   dummy     只输出消息的第一个信息  如:`"string1","string2"`  只输出`string1`  
    *   `pattern`模式匹配
  
# 模式匹配格式化
| 模式 | 叙述                                                          |
| ---- | ------------------------------------------------------------- |
| %r   | 本地时间                                                      |
| %p   | 日志输出的级别                                                |
| %c   | 日志输出的别名(分类)                                          |
| %h   | 主机名                                                        |
| %m   | 输出的数据                                                    |
| %d   | 输出日期，如：%d{yyyy-MM-dd-hh-mm-ss}                         |
| %%   | 在输出的日志当中输出%                                         |
| %n   | 换行                                                          |
| %z   | 进程号                                                        |
| %f   | %f{depth} 选择你的文件深度                                    |
| %F   | 文件完整路径，需要在 `category`中设置：`enableCallStack:true` |
| %l   | 输出行号，需要在 `category`中设置：`enableCallStack:true`     |
| %o   | 输出列号，即每行的第几个字符，需要:`enableCallStack:true`     |
| %s   | 调用的栈，需要在 `category`中设置：`enableCallStack:true`     |
| %x   | %x{<tokenname>} 将动态tokens添加到日志                        |
| %X   | %X{<tokenname>} 从`logger`的上下文中添加`token`               |
| %[   | 用于开启一个有颜色的输出块                                    |
| %]   | 用于结束一个有颜色的输出块                                    |


# 输出`tokens`
如果想要在日志中输出`Tokens`，需要在`layout`中配置,function 返回值必须为String
```
    tokens:{
        user:string |function
    }
```

# 常用`Appender`
## 类过滤器  -- categroyFilter 
*   type : categoryFilter,
*   exclude: `string` | `Array<string>`- 将从appender中排除的类别（如果提供值数组，则为类别）
*   appender: string  要过滤的appender的名称

## 控制台 -- console 
*   type: console,
*   layout: object

## 日期文件  -- datefile
*   type: dateFile 
*   filename: `String` 日志文件路径
*   pattern: `String` 匹配模式，默认为`.yyyy-MM-dd`
*   layout: `Optional` 默认为`basic`
*   encoding:`String` 编码方式，默认为`UTF-8`
*   compress:`boolean` 是否压缩
*   alwaysIncludePattern:`Boolean`备份以及源文件都保持匹配模式

## 普通文件  -- file
*   type:file
*   filename : `String`
*   maxLogSize:`Integer` 单个日志的最大字节数，如果没有指定则不会回滚
*   backups :`Integet` 备份文件的最大数量
*   layout:`optional` 设置布局
  
## 同步写入文件  --fileSync
*   type: fileSync
*   filname:`String`
*   maxLogSize:`Integer` 日志文件的最大大小，如果不指定则不会发生回滚
*   backups:`inTeger` 日志滚动期间需要保存的文件数量
*   layout : 可选，设置布局

## 日志等级过滤器
*   type:logLevelFilter
*   appender : `String` 需要在同意配置中定义需要过滤的appender的名称
*   level : `String`允许通过过滤器的最低事件级别
*   maxLevel : `String` 允许通过过滤器的最大事件级别，默认为`FATAL`

## 多文件 MultiFile Appender
[多文件添加器](https://log4js-node.github.io/log4js-node/multiFile.html)

## 其它添加器 
[其它添加器](https://log4js-node.github.io/log4js-node/appenders.html)