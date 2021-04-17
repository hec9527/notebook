package com.kotlin.objectAndClass

/**
 * 编译器常量
 *   - 使用const修饰顶级申明 或者 object声明 或者companion Object（伴生对象）
 *   - 原生类型初始化
 *   - 没有自定义getter
 */
const val PI = 3.141592654

class P {
    fun sayHello() {
        println("people hello")
    }
}

class Property {
    // 手动设置 get set
    var name: String = "saga"
        get() = field + ""
        set(value) {
            // field 用于访问幕后字段，只能在set中使用
            field = value + ""
        }

    // 外部只读，内部使用默认修改器
    var age: Short = 23
        private set

    fun setAge(age: Short) {
        this.age = age
    }

    // 延迟初始化, 没有初始化，下方使用的时候也不需要非空判定
    lateinit var people: P

    fun sayHello() {
        // 检测延迟初始化是否已经初始化
        if (this::people.isInitialized) {
            people.sayHello()
        }
    }
}


fun main() {
    val l = Property()
    println(l.name + "_" + l.age)
    l.setAge(44)
    println(l.name + "_" + l.age)

    // 编译器常量
    println("编译器常量：$PI")

    // 延迟初始化
    println()
    val a = Property()
    a.people = P()
    a.sayHello()
}