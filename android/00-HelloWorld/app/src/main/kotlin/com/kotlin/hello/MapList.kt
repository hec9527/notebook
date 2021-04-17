package com.kotlin.hello

fun main() {
    // map
    val map = mapOf("a" to 1, "b" to 2, "C" to 3)
    println(map["a"])
    // map["a"] = 11  // 只读

    val mmap = mutableMapOf("a" to 1, "b" to 2)
    println(mmap["a"])
    mmap["a"] = 11
    println(mmap["a"])

    for(m in mmap){
        print("$m ${m.key}_${m.value}  ")
    }

    // 延长属性
    // var str:String by lazy {   }

    // 函数扩展
    fun String.toInt() {}
    "asd".toInt()
}


