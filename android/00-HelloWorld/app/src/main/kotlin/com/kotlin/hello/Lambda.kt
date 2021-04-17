package com.kotlin.hello


fun main() {
    var str = "hello Kotlin"
    println(str.filter { it != 'h' && it !='o' })
}