package com.kotlin.objectAndClass


fun main() {
    // 扩展无法修改的类
    fun String.getFirst(): Char {
        return this[0]
    }

    fun String.trimL(): String {
        return this.trim()
    }

    fun String.trimR(): String {
        return this.trimEnd()
    }

    var str: String = "hello world"
    println(str.first())
    str = "  $str"
    println(str.trimL())
    println(str.trimR())
    println(str.trimR().trimL())
    // TODO 扩展

}