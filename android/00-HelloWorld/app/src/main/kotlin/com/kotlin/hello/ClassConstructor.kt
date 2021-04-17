package com.kotlin.hello

open class People(var name: String, var age: Number) {}

class Students(name: String, age: Int, var num: Int) : People(name, age) {
    init {
        //  这是一个结构体，然后呢  你写的代码可以放在这里
        //  初始化的时候执行
        println("初始化了一个学生")
    }

    fun syaNum() {
        println("my number is $num")
    }

    fun Run(): Nothing = TODO("you should warm up first")
}

//  kotlin 次级构造函数
open class Animal(var name: String, var breed: String) {
    fun eat() {
        println("I'am $name, I eatting")
    }
}

class Dog(name: String, breed: String, var owner: String) : Animal(name, breed) {
    constructor(owner: String) : this("小黄", "中华田园犬", owner)
    constructor() : this("小黑", "中华田园犬", "王尼玛")

    fun bark() {
        println("I'am $name, a Dog, I can bark! my master is $owner")
    }
}

class Cat : Animal {
    constructor(name: String) : super(name, "英短") {
        println("new cat")
    }

    // 猫叫
    fun mew() {
        println("I'am a Cat, breed is $breed")
    }
}


fun main() {
    var s = Students("saga", 22, 34563)
    println(s.name)
    println(s.age)
    s.syaNum()
    // s = s.apply {
    //     var address = "长安街"
    //     var mother = "alisi safa"
    // }
    // println(s.address)


    println()
    val d = Dog("旺财", "拉布拉多", "王尼玛")
    d.eat()
    d.bark()

    val dd = Dog()
    dd.bark()
    val ds = Dog("曹尼玛")
    ds.bark()

    println()
    val c = Cat("炸弹")
    c.mew()

    val n: Number = 20
    println(n.toInt())
}