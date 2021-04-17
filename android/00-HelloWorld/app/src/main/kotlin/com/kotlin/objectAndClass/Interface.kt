package com.kotlin.objectAndClass

/**
 * 接口
 *  - 接口中的方法可以有默认实现，也可以是抽象的
 *  - 接口中可以定义属性，但是要么是抽象的，要么提供访问器实现
 */
interface Man {
    abstract var name: String
    fun sayName() {
        println("hello, my name is $name")
    }

    abstract fun say(str: String)
    // var sex: String
    //     get() = "femal"
}

// 接口继承
interface Student : Man {
    abstract fun study()
}

class PP(override var name: String = "alice") : Man {

    override fun say(str: String) {
        println(str)
    }
}

class S(override var name: String = "saga") : Student {
    override fun say(str: String) {
        println("say no thing")
    }

    override fun study() {
        println("I'am a student, I studing")
    }
}


fun main() {
    // 继承接口
    val p = PP()
    p.say("hello kotlin")
    p.sayName()

    // 接口继承
    println()
    val s = S()
    s.sayName()
    s.study()
}