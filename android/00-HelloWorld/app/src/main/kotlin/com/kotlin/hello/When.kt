package com.kotlin.hello

fun WhenFun(num: Int):String{
    return  when(true) {
        num == 1 -> "str:1"
        num == 2 -> "str:2"
        else -> "not 1 or 2"
    }
}

fun main(){
    println(WhenFun(1))
    println(WhenFun(2))
    println(WhenFun((3)))
}