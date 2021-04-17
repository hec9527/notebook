package com.kotlin.objectAndClass

/**
 * 可见修饰符
 *    - private
 *    - public
 *    - internal
 *    - protected
 *
 *  顶级声明
 *  | 声明类型| 说明              |
 *  | ----   | -----            |
 *  | public | 默认值，声明随处可见|
 *  | internal| 相同模块可见      |
 *  | private | 同文件可见       |
 *  类和接口
 *  | 申明类型  |  说明            |
 *  | public | 默认值，声明随处可见|
 *  | internal| 相同模块可见      |
 *  | private | 类内部可见        |
 *  | project | 类和派生类可见     |
 */
private const val Pi = 3.1415926

public fun showInfo(str: String) {
    println(str)
}

internal fun showName(name: String) {
    println(name)
}

private open class Father3 {
    protected open var name: String = "saga"
    protected var age: Short = 23
    private var sex: String = "mele"
}

private class Sonn : Father3() {
    override var name: String = "alice"

    fun sayName() {
        println(this.name + "_" + this.age)
        // this.sex
    }
}


fun main() {
    val s = Sonn()
    s.sayName()
}