package com.kotlin.static

/**
 * kotlin 中定义了大量的标准函数，下面列举一些
 *  - with
 *  - run
 *  - apply
 */
fun main() {
    val fruits = listOf<String>("Apple", "banana", "Orange", "Pear", "Grape")

    /**
     * with
     *  - with 效果类似于JavaScript中的with，改变上下文对象。kotlin中可以作为表达式也可以作为语句，最后一行为返回值
     */
    val r1 = with(StringBuilder()) {
        append("(with) Begin to eat fruit: \n")
        for (fruit in fruits) {
            append("$fruit\n")
        }
        append("ate all fruits!")
    }
    println(r1)
    println()


    /**
     * run
     *  - run效果同with，但是调用方式不一样，可以作为表达式也可以作为语句，最后一句为返回值。run的调用必须依附于一个对象
     */
    val r2 = StringBuilder().run {
        append("(run) Begin to eat fruit: \n")
        for (fruit in fruits) {
            append("$fruit\n")
        }
        append("ate all fruits!")
    }
    println(r2)
    println()


    /**
     * apply
     * - 和JavaScript的效果完全不同，效果同with，调用同run，最后一句不是返回值，依附于对象调用，返回对象本身
     */
    val r3 = StringBuilder().apply {
        append("(apply) Begin to eat fruit: \n")
        for (fruit in fruits) {
            append("$fruit\n")
        }
        append("ate all fruits!")
    }
    println(r3)
    println()

}