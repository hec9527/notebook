package com.kotlin.objectAndClass

class MainConstruct(name: String) {
    var name: String = "alice $name"
}

class MainConstruct1(name: String) {
    var fullName: String = "alice $name"

    // 初始化块，在对象构建的时候执行
    init {
        println("build a alice family member")
    }
}

class MainConstruct2(var name: String = "alice saga")

// 主构造函数带修饰符
class MainConstruct3 public constructor(val name: String)

fun main() {
    // 主构造函数
    val s = MainConstruct("saga")
    println(s.name)

    // 主构造函数带初始化块
    println()
    val a = MainConstruct1("saga")
    println(a.fullName)

    // 主构造函数带默认参数
    println()
    val b = MainConstruct2()
    val c = MainConstruct2("tony")
    println(b.name)
    println(c.name)

    // 主构造函数带修饰符
    println()
    val d = MainConstruct3("saga")
    println(d.name)
}