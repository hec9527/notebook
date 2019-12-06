# 1-5      C  A  D  C  A
# 6-10     B  B  A  B  A
# 11-14    C  B  B  D  
#  7题  5000 2500 1250 625 312 156 78 39 19 9 4 2 1

print("\n{:_^30}\n".format("第四周课前作业编程第一题"))

try:
    num=eval(input(">Please input int number:"))
except Exception as e:
    print(e)
else:
    sum=0
    num=int(num)
    for i in range(num+1):
        if not i%2:
            sum+=(-i)
        else:
            sum+=i
    print(sum)

print("\n\n{:_^30}\n".format("第四周课前作业编程第二题"))
def isNum(x):
    for i in range(2,x):
        if x%i==0:
            return 0
    return x

try:
    num=int(input(">Please input a int num bigger than 2:"))
except Exception as e:
    print(e)
else:
    if num<2 :
        print("输入的数字必须大于2")
    else:
        sum=0
        for i in range(2,num):
            if isNum(i):
                sum+=i
        print(sum)



print("\n\n{:_^30}\n".format("第四周课前作业编程第三题"))
try:
    num=eval(input(">Please input a number as base:"))
except Exception as e:
    print(e)
else:
    olist=[]
    bigger=0
    while True:
        try:
            _input=eval(input(">Please input a number:"))
        except Exception as e:
            print(e)
            break
        else:
            olist.append(_input)
    # print(olist)
    for i in olist:
        if i>num:
            bigger+=1
    r=bigger/len(olist)
    print("合格率为：{:.2%}".format(r))