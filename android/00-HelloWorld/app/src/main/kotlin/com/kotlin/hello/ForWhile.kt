package com.kotlin.hello

fun main() {
    // 创建包含两端的区间
    for (i in 0..10) {
        print(i)
    }
    println()
    // 创建左开右闭的区间
    for (i in 0 until 10) {
        print(i)
    }
    println()
    // 添加步长
    for (i in 0..10 step 3) {
        print(i)
    }
    println()
    for (i in 0 until 10 step 3) {
        print(i)
    }
    println()
    // 降序区间
    for (i in 10 downTo 0 step 3) {
        print(i)
    }
    // step 不能为负数
    // println()
    // for (i in 0..10 step -1) {
    //     print(i)
    // }

    println()
    val lis = listOf("saga", "lisa", "tony")
    for (p in lis) {
        print("$p ")
    }

    println()
    var i = 0
    while (i < lis.size) {
        print("${lis[i]} ")
        i++
    }


    // in
    println()
    for (i in 0..10) {
        println("$i+3 in 0..10?: ${i + 3 in 0..10}")
    }

    println()
    val fruits = listOf("banana", "avocado", "apple", "kiwifruit")
    fruits.filter { it.startsWith("a") }.sortedBy { it }.map { it.toUpperCase() }.forEach { println(it) }
}