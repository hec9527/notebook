import numpy

arr = numpy.arange(12)
print("转换之前的数组：\n", arr)

arr = arr.reshape(3, 4)
print("\n转换之后的数组\n", arr)

print("\n查看数组的维度", arr.ndim)

arr = numpy.random.randint(2, 20, (3, 4))
print("\n展平之前\n", arr)

arr = arr.ravel()
print("\n展平之后\n", arr)

arr = numpy.random.randint(2, 20, (3, 4))
arr = arr.flatten()
print("\nflatten()横向展平",arr)

arr = numpy.random.randint(2, 20, (3, 4))
arr = arr.flatten('F')
print("\nflatten()纵向展平", arr)




print("\n\n\n","数组的组合".center(50,"-"))

print("\n","hstack横向组合".center(50,' '))
arr1 = numpy.arange(12).reshape(3, 4)
print("数组1", arr1)

arr2 = numpy.random.randint(2,10,(3,2))
print("数组2", arr2)

arr = numpy.hstack((arr1, arr2))
print("\nhstack横向组合之后的数组\n", arr)



print("\n", "vstack纵向组合".center(50, ' '))
arr1 = numpy.arange(12).reshape(3, 4)
print("数组1", arr1)

arr2 = numpy.random.randint(2, 10, (1, 4))
print("数组2", arr2)

arr = numpy.vstack((arr1, arr2))
print("\nvstack纵向组合之后的数组\n", arr)



print("\n\n\n","数组的分隔".center(50,"-"))
arr = numpy.arange(9).reshape(3, 3)
print(arr)
print("\n横向分隔\n", numpy.hsplit(arr, 3))
print("\n纵向分隔\n", numpy.vsplit(arr, 3))
print("\nsplite横向分隔\n", numpy.split(arr, 3, 1))
print("\nsplite纵向分隔\n", numpy.split(arr, 3, 0))

