import numpy

arr1 = numpy.arange(0,1,0.01)
print('\n数值范围0-1步长为0.01的数组：\n',arr1)

arr2=numpy.random.randn(100)
print('\n100个服从正态分布的随机数：\n',arr2)

# 四则运算    加减乘除
 
arr_add = arr1 + arr2
print('\n四则预算+：\n',arr_add)

arr_sub = arr1 - arr2
print('\n四则运算-：\n', arr_sub)

arr_mut = arr1 * arr2
print('\n四则运算*：\n', arr_mut)

arr_div = arr1 / arr2
print('\n四则运算/：\n', arr_div)


