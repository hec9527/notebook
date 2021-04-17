package com.kotlin.objectAndClass

/**
 * SAM 函数式接口
 * 使用fun 修饰的 interface， 可以有多个非抽象成员，但只包含一个抽象方法的接口   --->   函数式接口
 */
fun interface MyMath {
    fun accept(it: Int): Boolean
}

fun interface IntPredicate {
    fun accept(i: Int): Boolean
}

fun main() {
    val isEven = IntPredicate { it % 2 == 0 }
    val isOdd = MyMath { it % 2 != 0 }
    println("7 isEven: ${isEven.accept(7)}")
    println("7 isOdd : ${isOdd.accept(7)}")
}


