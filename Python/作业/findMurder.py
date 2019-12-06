
people=[ [0,1,1,1], [0,0,1,0], [0,0,0,1], [1,1,1,0] ]

#说假话的人取反
def fn1(arg):
    for i in range(4):
        arg[i]=1 if arg[i]==0 else 0
    return arg
   
#检查是否符合条件 返回嫌疑人编号
def fn2():
    for i in range(4):
        if people[0][i]==people[1][i]==people[2][i]==people[3][i]==1:return i
    return False

# 每次遍历说假话的人，将他的视角全部取反
for i in range(4):
    people[i]=fn1(people[i])
    if fn2() :
        print("嫌疑人是:{},其中{}说谎".format(chr(fn2()+65),chr(i+65)))
    else:
        people[i]=fn1(people[i])