package com.kotlin.hello

class P {
    val name = "saga"
    var age = 28

    override fun toString(): String {
        return "name is $name, age is $age"
    }
}

fun main() {
    var str: Any = "c";
    if (str is String) {
        println(str)
    }
    str = 23
    if (str is Int) {
        println(str.and(2))
    }

    str = P()
    if (str is P) {
        println(str.toString())
    }
}