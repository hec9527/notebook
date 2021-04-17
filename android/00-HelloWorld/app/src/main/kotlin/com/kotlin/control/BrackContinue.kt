package com.kotlin.control


fun showRet(): Int {
    for (i in 0..10) {
        print(i)
        if (i == 4) {
            return i
        }
    }
    return 0
}

fun main() {
    // continue
    for (i in 0..10) {
        print(i)
        if (i % 3 == 0) {
            continue
        }
    }

    // break
    println()
    for (i in 0..10) {
        print(i)
        if (i == 4) {
            break
        }
    }

    // reutrn
    println()
    println("\n" + showRet())


    // label
    println()
    outter@ for (i in 0..10) {
        if (i % 3 == 0) {
            print("continue outter   ")
            continue@outter
        }
        inner@ for (j in 0..10) {
            if (j == 3) {
                print("continue inner:$i ")
                continue@inner
            }
        }
    }
}