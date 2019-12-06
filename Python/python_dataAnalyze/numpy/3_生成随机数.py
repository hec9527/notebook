import numpy


print("生成一维随机数\n",numpy.random.random(10))

print('\nrand生成均匀分布的随机数\n', numpy.random.rand(2, 5))

print("\nrandn生成正态分布的随机数\n",numpy.random.randn(2,5))

print("\nrandint生成给定范围的随机数\n", numpy.random.randint(2, 20, (5, 6)))

