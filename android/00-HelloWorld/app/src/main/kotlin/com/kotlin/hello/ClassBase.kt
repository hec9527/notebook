package com.kotlin.hello

open class Person {
    var name = "tom";
    var age = 22;

    fun say() {
        println("hello my name is $name, and $age year old");
    }
}


class Student : Person() {
    private var num = 1641310231;

    fun sayNum() {
        println("my number is: $num")
    }
}


fun main() {
    val p = Person();
    p.say()
    p.name = "saga"
    p.age = 33
    println(p.name)
    println(p.age)


    println()
    val s = Student()
    s.say()
    s.sayNum()
}