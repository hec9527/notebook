package com.kotlin.objectAndClass

/**
 * Kotlin 中， Any是所有类的超类
 * 默认所有类都是final，无法被继承，如果要被继承需要使用open
 */

interface Person {
    fun sayHello() {
        println("Hello Kotlin")
    }
}

open class Father {
    fun sayHello() {
        println("hello kotlin")
    }
}

open class Father1(val name: String) {
    // 可覆盖的属性需要使用open
    open val age: Short = 32

    // 可覆盖的成员方法需要open
    open fun sayHello() {
        println("hello $name")
    }
}

open class Father2(var name: String) {
    init {
        println("base class init...")
    }
}

// 继承，父类需要加括号
class Son : Father()

// 继承父类构造带参数
class Son1(name: String) : Father1(name)

class Son2(name: String) : Father1(name) {
    // 使用final禁止重写
    final override val age: Short = 44

    // 使用final可以将重写的方法关闭，禁止派生类覆盖
    final override fun sayHello() {
        println("hello I'am $name, $age year old")
    }
}

class Son3(name: String) : Father2(name) {
    init {
        println("child class init...")
    }

    fun sayHello() {
        println("hello I'am $name")
    }
}

class Son4(name: String) : Father1(name) {
    fun say() {
        println("child say... and then invoke father sayHello")
        super.sayHello()
    }
}


class Son5(name: String) : Father1(name), Person {
    override fun sayHello() {
        super<Father1>.sayHello()
        super<Person>.sayHello()
    }
}

// 抽象类
abstract class People {
    abstract val name: String
    abstract fun sayHello()
}

class Son6(name: String = "Saga") : People() {
    override val name: String = name
    override fun sayHello() {
        println("hello I'am $name, I'am not abstrct")
    }
}


fun main() {
    // 基础继承
    val s = Son()
    s.sayHello()

    // 带参数初始化继承
    val a = Son1("alice")
    a.sayHello()

    // 重写父类方法
    val p = Son2("saga")
    p.sayHello()

    // 初始化顺序
    println()
    val d = Son3("Julie")
    d.sayHello()

    // 调用超类方法
    println()
    val f = Son4("tony")
    f.say()

    // 超类多个同名实现，指定调用
    println()
    val q = Son5("Tom")
    q.sayHello()

    // 抽象类继承
    println()
    val z = Son6()
    z.sayHello()
}