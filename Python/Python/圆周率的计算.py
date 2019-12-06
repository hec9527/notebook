
#蒙特卡洛法     求圆周率
import time
pi=0
n=1
for k in range(n):
    pi+=1/pow(16,k)*(4/(8*k+1)-2/(8*k+4)-1/(8*k+5)-1/(8*k+6))
print("总共计算{}次 圆周率为{}".format(n,pi))









