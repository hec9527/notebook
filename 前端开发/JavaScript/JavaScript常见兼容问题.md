# JavaScript 当中常见的兼容性问题

***如果没有特俗说明FF即代表firfox以及Chrome***

## 事件

- window.event
  - 表示当前事件对象，IE有这个对象，但是FF没有
- 获取事件对象
  - IE使用srcElement获取事件源，但是FF采用target获取事件源
- 添加、移除事件
  - IE
    - element.attachEvent("event",CallBack)
    - element.detachEvent("evnet",CallBack)
  - FF
    - element.addEventListener("event",CallBack,boolean)
    - element.removeElementListener("event",CallBack，boolean)
