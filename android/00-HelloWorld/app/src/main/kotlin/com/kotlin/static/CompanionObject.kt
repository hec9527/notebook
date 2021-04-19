package com.kotlin.static

class CompanionObject {

    fun fun1() {
        println("normal fun")
    }

    companion object {
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