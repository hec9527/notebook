import time
x = [45, 30, 11, 12, 14, 89, 56, 92, 95, 60, 80, 13, 15, 16, 17, 18, 19, 20, 22, 43, 54, 56, 67, 56, 65, 67, 76, 78, 87, 89, 98]
p = sum(x) / len(x)
print("平均值：",p)

tt = time.perf_counter()
try:
    x.index(50)
except:
    x.insert(0,50)
x.sort()
s = x[0:x.index(50)]
x.remove(50)
print(len(s))
print("第一种运行时间：", time.perf_counter()-tt)


x = [45, 30, 11, 12, 14, 89, 56, 92, 95, 60, 80, 13, 15, 16, 17,18, 19, 20, 22, 43, 54, 56, 67, 56, 65, 67, 76, 78, 87, 89, 98]
tt = time.perf_counter()
sum = 0
for i in x:
    if i < 50:
        sum +=1
print(sum)
print("第二种运行时间：", time.perf_counter()-tt)

x = [45, 30, 11, 12, 14, 89, 56, 92, 95, 60, 80, 13, 15, 16, 17,18, 19, 20, 22, 43, 54, 56, 67, 56, 65, 67, 76, 78, 87, 89, 98]
tt = time.perf_counter()
x.sort()
sum = 0
for i in x:
    if i >= 50:
        break
    sum += 1
print(sum)
print("第三种运行时间：", time.perf_counter()-tt)
