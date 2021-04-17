package com.kotlin.hello

fun show() {
    println("hello kotlin")
}

fun main() {
    println("hello world")
    show()

    var str = "hello";
    println(str);
    str += "world";
    println(str)

    val n: Byte = 6;
    println(n);

    val b: Short = 1024;
    println(b)


    var s: String? = null
    println(s?.length ?: "empty")
    s = "asddfff";

    val ss: String = s + 'w';
    println(ss)
}




