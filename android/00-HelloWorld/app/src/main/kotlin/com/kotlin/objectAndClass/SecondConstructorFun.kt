package com.kotlin.objectAndClass

class SecondConstructorFun1(var name: String, val age: Number) {
    constructor(name: String) : this(name, 32)
}

class SecondConstructorFun2(var name: String, var age: Number) {
    constructor() : this("alice") {
        println("second constructor without params invoked")
    }

    constructor(name: String) : this(name, 32) {
        println("second consturctor with: name invoked")
    }

    // 初始化块，在每次初始化之前执行， 主次级构造函数之前
    init {
        println("SecondConstructorFun2 init...")
    }
}


fun main() {
    // 次级构造函数委托主构造函数
    val s = SecondConstructorFun1("saga")
    println(s.name + "_" + s.age)

    // 次级构造函数间接委托主构造函数
    println()
    val p = SecondConstructorFun2()
    println(p.name + "_" + p.age)

}