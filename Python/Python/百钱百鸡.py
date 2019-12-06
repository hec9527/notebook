# 百钱百鸡
#       一百文钱买100只鸡，鸡公5文钱一只，鸡母三文钱一只，鸡雏三只一文钱
#       问鸡公、鸡母、鸡雏各几只


# 自己的写法
computers = 0
def fn():
    global computers
    for cock in range(20):  # 鸡公
        for hen in range(33):   # 鸡母
            for chick in range(0, 100, 3):  # 小鸡
                computers += 1
                if cock + hen + chick == 100 and cock * 5 + hen * 3 + chick / 3 == 100:
                    print(f"公鸡：{cock}只，鸡母：{hen}只，鸡雏：{chick}只")
fn()
print(f"自己的写法遍历{computers}次")


# 大佬的写法
times = 0
for x in range(0, 20):
    for y in range(0, 33):
        z = 100 - x - y
        if 5 * x + 3 * y + z / 3 == 100:
            print('公鸡: %d只, 母鸡: %d只, 小鸡: %d只' % (x, y, z))
        times += 1
print("大佬的写法遍历次数%d" % times)