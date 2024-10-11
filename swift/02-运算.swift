let names = ["saga","tom","alice","obama"]


for name: String in names[...2]{
    print(name)
}

print(names[...2].capacity)

let range = ...5;

// for i in ...5{
//     print(i)
// }

print(range.contains(4))
print(range.contains(5))
print(range.contains(6))

let str = """

    这是个多行字符串
    哈哈哈哈哈
    
    缩进？不存在的
    
    """

print(str)