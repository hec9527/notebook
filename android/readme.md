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
