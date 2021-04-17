package com.kotlin.hello

fun whenFun(num: Int):String{
    return  when(true) {
        num == 1 -> "str:1"
        num == 2 -> "str:2"
        else -> "not 1 or 2"
    }
}

fun whenFun1(num:Int):String = when(num){
    1 -> "1"
    2 -> "2"
    else ->"3"
}

fun main(){
    println(whenFun(1))
    println(whenFun(2))
    println(whenFun((3)))

    println()
    println(whenFun1(1))
    println(whenFun1(4))
}