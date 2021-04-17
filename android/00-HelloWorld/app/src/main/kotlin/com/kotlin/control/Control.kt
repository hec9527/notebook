package com.kotlin.control

import java.util.*


fun showMes(s: Any) {
    val msg = when (s) {
        is String -> s
        is Number -> "Number:$s"
        is Objects -> s.toString()
        false -> "you input false"
        else -> "unexpected input"
    }
    println(msg)
}


/**
 * Kotlin 流程控制
 */
fun main() {
    // if else分支
    val a = 100
    if (a >= 100) {
        println("a >= 100")
    } else {
        println("a < 100")
    }
    val msg = if (a >= 100) "a >= 100" else "a < 100"
    println(msg)


    // when
    val aa = when (a) {
        100 -> "a == 100"
        else -> "a != 100"
    }
    println(aa)

    when {
        a == 100 -> println("\nyes 100")
        a != 100 -> println("\nnot 100")
    }

    println()
    showMes(false)
    showMes("hello kotlin.when")
    showMes(2)

    // for
    for (i in 0..10) print(i)
    for (i in 0 until 10 step 1) print(i)
    for (i in 0 downTo -10 step 2) print(i)

    // while
    println()
    var i = 0
    while (i < 10) {
        print("${i++} ")
    }
}