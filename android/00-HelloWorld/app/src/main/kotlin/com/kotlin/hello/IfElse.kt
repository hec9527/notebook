package com.kotlin.hello


fun max(num1: Int, num2: Int): Int {
//    kotlin 中，if分支后面如果只有一条语句， 是可以省略括号的
    return if(num1 > num2) num1 else num2
}

fun main() {
    println(max(20,22))
}