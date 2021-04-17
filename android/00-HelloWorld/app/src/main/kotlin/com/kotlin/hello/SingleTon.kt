package com.kotlin.hello

object SingleTon {
    val name:String = "saga"

    fun sayName(){
        println("my name is $name")
    }
}

fun main() {
    SingleTon.sayName()
    val s = SingleTon
    s.sayName()
    println(s == SingleTon)
}