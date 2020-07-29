# 浏览器控制台

## `console`自带的属性以及方法

### 内容输出

- 一般内容输出 (输出级别不同)
  - 支持内容格式化
    - `%s`——输出字符
    - `%d`——输出整数
    - `%i`——输出整数
    - `%f`——输出浮点数
    - `%o`——输出对象
    - `%c`——CSS内容格式化
  - 输出函数
    - `log`
    - `debug`
    - `info`
    - `warn`
    - `error`
- 组织内容输出
  - `dir`     用于输出dom节点
  - `dirxml`    xml形式展示dom节点
  - `table`    (用于输出json数据)
  - `group`    输出分组
  - `groupCollapsed`   和group一样，但是初始的时候展示的内容是折叠的
  - `groupend`   分组结束
- 功能函数
  - `trace`  用于栈调用追踪
  - `count`  函数调用计数
  - `countReset`   计数重置
  - `clear`  清空控制台
  - `assert`   断言，当断言为false的时候，输出后面的消息
  - `profile`   展示CPU使用情况
  - `profileEnd`  结束
  - `time`  计时开始
  - `timeEnd`  计时结束
  - `timeLog`
  - `timeStamp`
  - `context`

## 浏览器控制台独有

| 操作                                | 说明                                                                         |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| `$_`                                | 返回最近一次操作执行结果                                                     |
| `$0_$4`                             | 返回最近某次点击的dom元素，$0显示最近一次                                    |
| `$(select,[startnode])`             | document.querySelector()                                                     |
| `$$(select,[startnode])`            | document.querySelectorAll()                                                  |
| `$x(path, [startNode])`             | 返回页面中满足制定路径的Xpath表达式                                          |
| `clear()`                           | 清空控制台                                                                   |
| `copy(string/object)`               | 复制内容到剪切板                                                             |
| `debug(function)`                   | 在制定函数调用的时候，打开source面板调试                                     |
| `undebug(function)`                 | 取消debug监听                                                                |
| `inspect(object/function)`          | 在对应的面板中打开对应的对象（node对象/function对象）                        |
| `getEventListeners(object)`         | 用数组显示在节点对象上绑定的事件                                             |
| `keys(object)`                      | 显示对象的所有属性名                                                         |
| `values(object)`                    | 显示对象的所有属性值                                                         |
| `monitor(function)`                 | 当指定函数调用的时候会显示函数名，以及调用时的参数                           |
| `unmonitor(function)`               | 取消函数监听                                                                 |
| `monitorEvents(object[, events])`   | 当指定对象发生指定事件时打印到控制台，事件可以是一个也可以是一个数组或者一类 |
| `unmonitorEvents(object[, events])` | 取消对象事件监听                                                             |

## 事件分类

| 事件类型  | 事件名                                                                                          |
| --------- | ----------------------------------------------------------------------------------------------- |
| `mouse`   | "mousedown", "mouseup", "click", "dblclick", "mousemove", "mouseover", "mouseout", "mousewheel" |
| `key`     | "keydown", "keyup", "keypress", "textInput"                                                     |
| `touch`   | "touchstart", "touchmove", "touchend", "touchcancel"                                            |
| `control` | "resize", "scroll", "zoom", "focus", "blur", "select", "change", "submit", "reset"              |
