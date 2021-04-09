package com.kotlin.hello

fun main(){
    // 创建包含两端的区间
    for( i in 0..10){
        print(i)
    }
    println()
    // 创建左开右闭的区间
    for( i in 0 until 10){
        print(i)
    }
    println()
    // 添加步长
    for(i in 0..10 step 3){
        print(i)
    }
    println()
    for(i in 0 until 10 step 3){
        print(i)
    }
    println()
    // 降序区间
    for(i in 10 downTo 0 step 3){
        print(i)
    }
}