import numpy

print("一维数组的索引".center(50,'-'))

arr = numpy.random.randint(2, 20, 30)

print('\n生成的数组\n', arr)

print('\n随机数组第1个',arr[0])

print("\n随机数组的第3-5个", arr[2:4])

print("\n最后三个", arr[-3:])

print("\n单数个", arr[::2])

print("\n修改之前的第5个", arr[4])
arr[4] = -1
print("\n修改之后的第5个", arr[4])


print("\n\n","多维数组索引".center(50,"-"))

arr = numpy.random.randint(2, 30, (5, 8))
print("\n随机生成的多维数组\n", arr)

print("\n第一行第一个", arr[0, 0])

print("\n第3行的第2-6个", arr[2, 1:6]) 

print("\n第1-5行的第2个", arr[0:5, 1])

print("\n第1-2行的第1-2个\n", arr[0:2, 0:2])

arr[0:2, 0:2] = 1
print("\n第1-2行的第1-2个赋一个值之后\n", arr[0:2, 0:2])

arr[0:2, 0:2] = [1, 2]
print("\n第1-2行的第1-2个赋多个值之后\n", arr[0:2, 0:2])

print("\n使用整数函数索引\n", arr[((0, 1, 2), (1, 2, 3))])
