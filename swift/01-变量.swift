var count = 10

var `class` = "Class 20"


print(`class`)
print(1,2,3,4,5,6,7,8,7,3,2,1, separator: "_", terminator: "\t")
print(1,2,3,4,5,6,7,8,7,3,2,1, separator: "_")

print(Int8.max, UInt8.max,Int64.max,UInt64.max)


var u8:UInt8 = 128
var i8:Int8 = 122

var result = u8 + UInt8(i8);
print(result)

var name: String? = "James"
let age: Int? = 10

print(age!.hashValue)


if let name,let age {
    print("name: \(name), age: \(age)")
}

name = nil

let name1 = name ?? "Saga"
print("name1: \(name1)")


let possibleNumber = "123"
let convertedNumber = Int(possibleNumber)
 
 
let number = convertedNumber!

print(number)
 
let implicitString: String! = "hello world"
let newString: String = implicitString


// assert(false)
assert(true, "张三不是男性")