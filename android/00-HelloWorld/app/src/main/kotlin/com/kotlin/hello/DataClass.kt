package com.kotlin.hello

import kotlin.random.Random

// 数据类
data class TelPhone(val brand:String, val price:Double) {}

// 非数据类
class Car(val brand: String, val price: Double){
    override fun hashCode(): Int {
        return brand.hashCode() + price.toInt()  + Random.nextInt()
    }

    override fun equals(other: Any?): Boolean {
        if(other is Car){
            return other.brand == brand && other.price == price
        }
        return  false
    }

    override fun toString(): String {
        return "brand: ${brand}, price: ${price.toInt()}"
    }
}


fun main() {
    val t = TelPhone("samsung",1299.00)
    val t2 = TelPhone("samsung",1299.00)
    val l = TelPhone("xiaomi",1999.00);
    println(t)
    println("samsung is equls xiaomi:"+ (t ==l))
    println("samsung is equls samsung:"+ (t == t2))


    println()
    println()
    val c1 = Car("xiaopeng",199999.00)
    val c2 = Car("xiaopeng",199999.00)
    val c3 = Car("xiaomi",299999.00)
    println(c1)
    println("these cars are equls: ${(c1 == c2)} ${(c2 == c3)}")
}