# Android

## Android 开发四大组件

- Active
- Service
- Boradcast
-

## Active 生命周期

Android 中的 Active 存在于栈的数据结构中（返回栈），每次总是展示最上面的 Active

- 运行状态
  - Active 处于返回栈的栈顶，系统最不愿意回收的 Active
- 暂停状态
  - 不是处于栈顶的 Active，但是仍然可见。系统也不愿意回收这种 Active，除非内存严重不足
- 停止状态
  - 不在栈顶也不可见的 Active，依然保存着上下文。当系统需要的时候就会回收资源
- 销毁状态
  - Ative 从返回栈中移出(finish)，就变成销毁状态，系统最倾向于回收这种状态的 Active

### Active 的生命周期函数

- onCreate
- onDestory
- onResume
- onPause
- onStop
- onStart
- onRestart

### Activity 启动模式

- `standard` 标准模式（默认），每次打开新的 `Activity`
- `singleTop` 在栈顶复用实例，不在栈顶创建新实例
- `singleTask` 如果 `Activity` 在返回栈中，则弹出上面的 `Activity` 并销毁
- `singleInstance` 将 `Activity` 存在单独的返回栈中，与其他应用共享， 从该 `Activity` 中生成的 `Activity` 不能直接返回到这个 `Activity`。 采用 `singleInstance` 模式启动的 `Activity` 的 `TaskId` 与其他 `Activity` 的 `TaskId` 不一样

```sequence
title: "Activity启动模式之singleInstance， SecondActivity采用 singleInstance模式"

MainActivity   ->  SecondActivity: 启动SecondActivity
SecondActivity ->  ThirdActivity: 启动ThridActivity
ThirdActivity  ->  MainActivity: 从ThridActivity返回直接返回MainActivity
MainActivity   ->  SecondActivity: 从MainActivity中退出，返回到SecondActivity
SecondActivity ->  EXIST: 从SecondActivity退出应用
```

### Activity 小技巧

获取当前 `Activity` 类名，新建一个 `Activity` 类，继承自 `AppCompatActivity，` 然后在 `onCreate` 生命周期中打印日志 `javaClass.simpleName`
