# 前端路由

## 页面发展历史

1. 静态页面
2. 基于Ajax的异步加载页面
3. SPA （single page Application） -- 基于前端路由

## 前端路由的优缺点

- 优点
  - 交互过程中不需要刷新页面，媲美原生应用
  - 数据通过ajax加载
- 缺点
  - SPA无法记录用户操作记录，用户刷新、前进、后退无法展示用户的真是期望
  - 多个页面对应一个URL，对SEO（Search Engine Optimization）不友好

## 前端路由的两种模式

- hash路由

- history模式

## hash模式优缺点

- 优点（相较于history模式）
  - 兼容性好
  - 无需服务端配合

- 缺点（相较于history模式）
  - URL看起来很凌乱
  - 导致页面锚点功能失效
  - 相同hash值不会触发   hashchange事件
