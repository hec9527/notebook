
# 斐波那契数列  大佬版
# a, b = 0, 1
# for _ in range(20):
#     (a, b) = (b, a + b)
#     print(a, end=' ')



# 获取斐波那契数列 指定位置的数
def Fibonacci(num):
    return 1 if 0 < num <= 2 else Fibonacci(num - 1) + Fibonacci(num - 2)

print(Fibonacci(6))
