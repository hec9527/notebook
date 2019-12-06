print("列表推导式".center(50, "-"))
a = [i for i in range(10) if i % 2 == 0]
print(a)

print("\n\n","字典推导式".center(50, "-"))
a = {"key"+str(i): i % 2 == 0 for i in range(10)[::-1]}
print(a)

print("\n\n","集合推导式".center(50, "-"))
a = {i for i in range(10)}
print(a)

print("\n\n", "推导式的其它操作".center(50, "-"))
e = (i for i in range(10))
print("next(e)", next(e))
for i in e:
    print(i)

print("\n\n", "推导式的求和".center(50, "-"))
print("可以将推导式作为参数传递")
print(sum(i for i in range(101)))
