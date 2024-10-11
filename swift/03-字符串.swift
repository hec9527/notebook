var str = #"lint 1\#nLine 2"#

print(str)

var char:Character = "A";

str.append(char)

str.append(contentsOf: "\nhello world")

print(str)



let count = 3;
print("count is \(count)")



func show(nums num: Int..., no no: Int){
    print(num.capacity, no)
}


show(no: 1)

