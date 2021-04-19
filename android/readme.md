# Android

## Android 开发四大组件

- Active (控件)
- Service (服务)
- BroadcastReceiver (广播接收器)
- Conetnt-Provider (内容提供者)

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

- 获取当前 `Activity` 类名

  新建一个 `Activity` 类，继承自 `AppCompatActivity，` 然后在 `onCreate` 生命周期中打印日志 `javaClass.simpleName`

- 更优雅的启动Activity

  在每个Activity中添加伴生对象（Java中使用静态方法），在伴生对象中设置一个启动Activity的函数，需要一个上下文参数，以及额外的启动Activity的参数，这样其他Activity启动这个Activity的时候就不用去看需要什么参数了





## Kotlin小技巧

- with

  with可以作为语句也可以作为表达式，最后一行作为返回值，with语句的作用同Js添加了语句的上下文

  ```kotlin
  var result = with(StringBuilder()){
      append("hello")
      append("kotlin")
      toString()
  }
  printLn(result) // hellokotlin
  ```

  

- run效果和with语句一样只不过调用方式不一样，最后一行作为返回值。run函数不能像with直接调用， 必须在某个对象上调用

  ```kotlin
  val result = with(StringBuilder()).run{
      append("hello")
      append("kotlin")
      toString()
  }
  printLn(result)  // hellokotlin
  ```

- apply效果以及调用方式同with一样，没有默认返回值而是自动返回对象本省

  ```kotlin
  val result = with(StringBuilder()).apply{
      append("hello")
      append("kotlin")
  }
  printLn(result.toString())  // hellokotlin
  ```

  