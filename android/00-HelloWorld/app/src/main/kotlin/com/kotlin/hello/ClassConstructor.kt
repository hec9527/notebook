package com.kotlin.hello

open class People(var name: String, var age: Number) {}

class Students(name: String, age: Int, var num: Int) : People(name, age) {
    init {
        //  这是一个结构体，然后呢  你写的代码可以放在这里
        //  初始化的时候执行
        println("初始化了一个学生")
    }

    fun syaNum() {
        println("my number is $num")
    }
}

fun main() {
    val s = Students("saga", 22, 34563)
    println(s.name)
    println(s.age)
    s.syaNum()
}