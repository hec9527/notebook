import numpy
import time


tt = time.time()
arr1 = [i for i in range(1, 10001)]
arr2 = [i for i in range(1, 10001)]
arr3 = []
for i in range(len(arr1)):
    arr3.append(arr1[i] ** 2 + arr2[i] ** 3)
tc = int(time.time()) - int(tt)
print(f"时间为:{tc}\n当前结果为：{arr3}")


tt = time.time()
arr1 = numpy.array([i for i in range(1, 10001)])
arr2 = numpy.array([i for i in range(1, 10001)])
arr3 = []
arr3 = arr1 ** 2 + arr2 ** 3
tc = int(time.time()) - int(tt)
print(f"时间为:{tc}\n当前结果为：{arr3}")