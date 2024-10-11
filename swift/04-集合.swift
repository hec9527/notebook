var arr = [1]
print(arr.count,arr.capacity ,arr)

arr.append(2)
print(arr.count,arr.capacity ,arr)

arr.append(200)
print(arr.count,arr.capacity ,arr)

let arr1 = [1,2,3,4]
// 常量 数组无法修改
// arr1.append(newElement: 2)

let arr2: [Double] = Array(repeating: 2.0, count: 3)

let arr3: [Double] = [3.0,3.0,4]

let arr4: [Double]  = arr2 + arr3

// print(arr4)


var arr5: [Int] = [1,2,3,4]


arr5.insert(9, at: 1)
print(arr5)

arr5.remove(at: 1)
print(arr5)

// arr5.removeLast(2)
arr5.removeLast()
print(arr5)

for num in arr5{
  print("arr5: \(num)")
}

for (index,value) in arr5.enumerated(){
  print("index: \(index), value: \(value)")
}  



var set1 = Set<Int>()

set1.insert(1)
print(set1)

var set2: Set = [1,2,3]
print(set2)

print(set2.contains(3))

for num in set2{
  print("set2: \(num)")
}

for num in set2.sorted(){
  print("sorted set2: \(num)")
}



var dic1: Dictionary<UInt8, String> = [1:"a",2:"b"]
print(dic1)
