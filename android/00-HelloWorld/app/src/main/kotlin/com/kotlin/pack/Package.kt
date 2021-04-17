package com.kotlin.pack

import com.kotlin.hello.Students
import com.kotlin.hello.*
import com.kotlin.hello.Person as PP  // 如果存在冲突，可以启别名

class Person

/**
 * 包
 *   在文件的所有内容都声明在包内，所以同一个包不能有相同的声明
 */
fun main() {
    // 命名导入内容
    val s = Students("saga", 23, 1345)
    s.syaNum()

    //全部导入内容
    val ss = Student()
    ss.sayNum()

    val p = PP()
    p.say()
}

