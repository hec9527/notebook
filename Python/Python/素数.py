import time

tt = time.time()
def getPrimeNumber(num):
    for index in range(1, num, 2):
        flag = True
        for factor in range(2, int(index ** 1 / 2)):
            if index % factor == 0:
                flag = False
                break
        if flag:
            print(index, end=" ")

getPrimeNumber(100)
print(f"\n自己的的写法耗时：{time.time()-tt}")


import math
tt=time.time()
for num in range(2, 100):
    is_prime = True
    for factor in range(2, int(math.sqrt(num)) + 1):
        if num % factor == 0:
            is_prime = False
            break
    if is_prime:
        print(num, end=' ')
print(f"\n大佬的写法耗时：{time.time()-tt}")