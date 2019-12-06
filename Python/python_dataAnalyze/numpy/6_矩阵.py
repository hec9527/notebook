import numpy

print("矩阵".center(50, "-"))
print("生成矩阵\n")
matr1 = numpy.mat('1 2 3;4 5 6;7 8 9')
print(matr1)
matr2 = numpy.matrix([[1, 2, 3], [2, 3, 4], [3, 4, 5]])
print("\n", matr2)



print("\n\n分块矩阵组合生成新的矩阵")
matr = numpy.bmat("matr1 matr1 matr1 matr1;matr1 matr2 matr2 matr1;matr1 matr2 matr2 matr1;matr1 matr1 matr1 matr1")
print(matr)