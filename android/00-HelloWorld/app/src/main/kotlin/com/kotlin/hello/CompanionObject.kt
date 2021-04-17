package com.kotlin.hello

// 伴生对象
class CompanionObject {

    companion object {
        private var info: String = "hello kotlin"
        private fun showInfo() {
            println(info)
        }
    }
}
/*
  这是一个注释
  /*  这是嵌套的注释   */
 */


fun main() {
    var c = CompanionObject()

}