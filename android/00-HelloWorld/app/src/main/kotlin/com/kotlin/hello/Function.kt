package com.kotlin.hello

// 匿名函数
val showInfo: (name: String) -> Unit = { str -> println(str) }

// 简化函数申明
fun simpleFunction(n: Int) = if (n == 1) {
    '1'
} else if (n == 2) {
    '2'
} else {
    '3'
}

fun simpleFunction1(n: Int) = when (n) {
    1 -> '1'
    2 -> '2'
    else -> '0'
}

fun simpleFunction2(n: Int) = when (true) {
    n == 1 -> '1'
    n == 2 -> '2'
    else -> '0'
}

fun show(str: String = "android") {
    println("hello $str")
}

// 高阶函数
fun addFoo(num1: Int, num2: Int, add: (n1: Int, n2: Int) -> Int): Int {
    return add(num1, num2)
}

fun main() {
    show()
    show("Kotlin")
    showInfo("Android")
    println(simpleFunction((3)))
    println(simpleFunction1(1))
    println(simpleFunction2(2))

    println()
    println(addFoo(1, 4) { x, y -> x + y })
}