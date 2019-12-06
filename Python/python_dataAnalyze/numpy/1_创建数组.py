import numpy

print("使用python序列创建数组".center(50, '-'))
ndarr = numpy.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
])
print(ndarr)  # "输出数组"
print(ndarr.dtype)  # "数据类型"
print(ndarr.ndim)  # "数组的维数"
print(ndarr.shape)  # "数组的行列"
print(ndarr.size)  # "数组元素总量"
print(ndarr.itemsize)  # "元素的大小,所占用的字节"
ndarr.shape = 3, 4
print("调整形状后的数组\n", ndarr)

print("\n\n"+"使用numpy提供的arange函数创建一维数组".center(50, '-'))
arr = numpy.arange(1, 11, 1)
print(arr)

print("\n\n"+"使用numpy提供的linespace函数创建一维数组".center(50, '-'))
arr = numpy.linspace(1, 100, 10)
print(arr)  # 创建等差数组

print("\n\n"+"使用numpy提供的logspace函数创建一维数组".center(50, '-'))
arr = numpy.logspace(1, 100, 10)
print(arr)

print("\n\n"+"使用numpy提供的zero函数创建一维数组".center(50, '-'))
arr = numpy.zeros((3, 4))  # shape
print(arr)

print("\n\n"+"使用numpy提供的eye函数创建一维数组".center(50, '-'))
arr = numpy.eye(5)  # 行列相等的数组
print(arr)

print("\n\n"+"使用numpy提供的diag函数创建一维数组".center(50, '-'))
arr = numpy.diag([1, 2, 3, 4, 5, 6, 7])   # 需要指明对角线上的数字  用数组/序列传递
print(arr)

print("\n\n"+"使用numpy提供的ones函数创建一维数组".center(50, '-'))
arr = numpy.ones((5, 6))  # 指明数组的大小  可以是多维数组
print(arr)
