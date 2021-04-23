package com.kotlin.static


/**
 * 静态方法
 * - Kotlin中没有直接定义静态方法的关键字
 * - 伴生对象的方法，等效模拟静态方法
 * - 在伴生对象方法上面添加注解 @JvmStatic 编译器会将方法编译为静态方法
 * - 所有顶层方法是静态方法
 */

class CompanionObject {

    fun fun1() {
        println("normal fun")
    }

    companion object {

        /**
         * 真正的静态方法
         * 应该使用注解的方式
         *
         * 注解只能在单例类或者伴生对象上面添加
         */
        @JvmStatic
        fun fun2() {
            println("statice fun")
        }
    }
}


fun main() {
    val s = CompanionObject()
    // 实例方法
    s.fun1()
    // 静态方法
    CompanionObject.fun2()
}