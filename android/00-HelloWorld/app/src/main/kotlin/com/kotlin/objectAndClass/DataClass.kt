package com.kotlin.objectAndClass

/**
 * 数据类
 *  自动生成 hashCode/equals、toString、copy、componentN函数
 *  使用data修饰
 */

data class User(var name: String, var age: Int) {
    // 非主要构造函数中声明的属性，自动生成的函数不会处理它
    var sex: String = "male"

    constructor(name: String, age: Int, sex: String) : this(name, age) {
        this.sex = sex
    }
}


fun main() {
    val s = User("tom", 23)
    val u = User("tom", 23, "female")
    println("$s == $u ? ${s == u}")
    println("equls sex? ${s.sex == u.sex}")
    println(s.component1())
    val (name, age) = s
    println("name = $name, age = $age")
}