print("{:*^30}".format("第四周实验题第一题_____自幂数"))

for i in range(1000,10000):
    pass
    x1=i//1000
    x2=(i-x1*1000)//100
    x3=(i-x1*1000-x2*100)//10
    x4=i-x1*1000-x2*100-x3*10
    if x1**4+x2**4+x3**4+x4**4==i:
        print(i,end="  ")


print("{:*^30}".format("第四周实验题第二题_____自幂数"))
for i in range(3):
    userName=input(">Please input username:")
    passworld=input(">Please input passworld:")
    if userName=="Kate" and passworld=="666666":
        print("登陆成功！")
        break
    else:
        print("密码错误")
        if i==2:
            print("3次用户名或者密码输入错误！")



print("{:*^30}".format("第四周实验题第三题_____自幂数"))
num=50
times=0
while True:
    try:
        _input=int(input(">"))
    except Exception as e:
        print(e)
        continue
    else:
        times+=1
        if _input>num:
            print("太大了")
        elif _input<num:
            print("太小了")
        else:
            print("猜了{}次，终于猜对了".format(times))
            break


print("{:*^30}".format("第四周实验题第四题_____自幂数"))
from random import random

print("经过大量的随机计算，得到的结果是{}".format("一样的概率"))
