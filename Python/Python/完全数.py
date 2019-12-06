# 完全数：
#       一个数的真因子，除了自身以外的所有约数的和等于他本身

def getPerfectNumber():
    num = 1
    while 1:
        lis = []
        for i in range(1, num):
            if num % i == 0:
                lis.append(i)
        if sum(lis) == num:
            print(f"{num}是一个完全数")
        num += 1


getPerfectNumber()
