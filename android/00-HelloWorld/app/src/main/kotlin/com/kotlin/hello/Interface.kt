package com.kotlin.hello

interface IStudent {
    fun studyEnglist()
    fun studyMath()
}


class MyStudent(val name:String): IStudent {
    override fun studyEnglist(){
        println("My name is $name, I'am Englist")
    }

    override fun studyMath() {
        println("My name is $name, I'am studing Math")
    }
}

fun main() {
    val s = MyStudent("张三")
    s.studyMath()
    s.studyEnglist()
    study(MyStudent("李四"))
}


fun study(student:IStudent){
    student.studyMath()
    student.studyEnglist()
}