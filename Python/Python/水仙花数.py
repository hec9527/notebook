# 水仙花数：
#     一个三位数，它的个位，十位，百位的三次方的和等于他本身


def getNarcissisticNumber():
    nums = []
    for i in range(100, 1000):
        pb, ps, pg = i // 100, i // 10 % 10, i % 10
        if pb ** 3 + ps ** 3 + pg ** 3 == i:
            nums.append(i)
    return nums

print(f"水仙花数:{getNarcissisticNumber()}")

