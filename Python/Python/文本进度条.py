import time
# 多行进度条
scale=10
print("--------多行进度条执行开始-------")
for i in range(scale+1):
    a='='*i
    b='_'*(scale-i)
    c=(i/scale)*100
    print("{:^3.0f}%[{}{}]".format(c,a,b))
    time.sleep(0.2)
print("---------多行进度条执行结束-------")

#单行进度条
print("\n\n\n--------单行进度条执行开始-------\n\n\n")
for i in range(101):
    a='='*(round)(i/10)
    b='_'*(round)((101-i)/10)
    print("\r{:3}%[{}{}]".format(i,a,b),end=" ")
    time.sleep(0.1)
print("\n\n\n--------单行进度条执行开始-------\n\n\n")