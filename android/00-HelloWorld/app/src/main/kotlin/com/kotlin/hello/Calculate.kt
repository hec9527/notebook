package com.kotlin.hello

// 四则运算
fun main() {
    val n: Int = 10
    val s: Byte = 3

    println("n = $n, s = $s")
    println("n + s = ${n + s}")
    println("n - s = ${n - s}")
    println("n * s = ${n * s}")
    println("n / s = ${n / s}")
    println("n % s = ${n % s}")

    val f = 3.3
    println("\nn = $n, f = $f")
    println("n + f = ${n + f}")
    println("n - f = ${n - f}")
    println("n * f = ${n * f}")
    println("n / f = ${n / f}")
    println("n % f = ${n % f}")


    /**
     * 位运算
     * 位运算只能操作Int 和 Long类型，并且没有特殊字符
     */
    println("101 <<  2: ${101 shl 2}")
    println("101 >>  2: ${101 shr 2}")
    println("101 <<< 2: ${101 ushr 2}")
    println("101  &  2: ${101 and 2}")
    println("101  |  2: ${101 or 2}")
    println("101  ^  2: ${101 xor 2}")
    println("!101     : ${101.inv()}")


    /**
     * 比较
     *  ==  !=
     *  >   <   <=   >=
     *  a..b    x in a..d     x !in a..b
     */
}
