print("\n{:*^50}".format("2018.9.27-hc-python第三次作业"))
print("\n第一题：求用户输入的平方并且格式化输出")
try:
    str=eval(input("请输入一个数:"))
except:
    print("输入数据类型错误，请输入数字")
else:
    str=int(str)
    num=str**2
    print("{:-^20}".format(num))

print("\n\n第二题：求用户输入的一个整数的绝对值以及和10的同符号加减乘除")
try:
    str=eval(input("请输入一个数："))
except :
    print("输入数据类型错误，请输入数字")
else:
    str=int(str)
    if str>=0 :
        str_abs=str
        flag=True
    else:
        str_abs=-str
        flag=False
    print("{}的绝对值为{}".format(str,str_abs))
    if flag:
        str_add=str+10
        str_sub=str-10
        str_mul=str*10
        str_div=str/10
    else:
        str_add=-abs(str+10)
        str_sub=-abs(str-10)
        str_mul=-abs(str*10)
        str_div=-abs(str/10)
    print("{}的同符号加法{},同符号减法{},同符号乘法{},同符号除法{}".format(str,str_add,str_sub,str_mul,str_div))

print("\n\n第三题：天天向上的力量")
try:
    str=eval(input("请输入你的努力值，(0——0.01):"))
except:
    print("输入的数据类型错误，请输入一个整数")
else:
    if abs(str)<0.01:
        str=float(str)
        str_down=(1-str)**365
        str_up=(1+str)**365
        print("如果你每天努力{:.2}，一年后的能力值为{:.2}倍。如果你每天堕落{:.2},一年后的能力值为{:.2}倍".format(str,str_up,str,str_down))
    else:
        print("输入的数据不在允许的范围内！")

print("\n\n第四题：输出等腰三角形")
try:
    str=eval(input("请输入等腰三角形的行数:"))
except :
    print("输入的数据类型错误，请重新输入:")
else:  
    str=int(str)
    if str%2!=0:
        for i in range(str):
            print("\n")
            left=str-1-i
            for j in range(left):
                print("   ",end="")
            for k in range(2*i+1):
                print(" * ",end="")
            for l in range(left):
                print("   ",end="")

print("\n\n第五题：输出等腰三角形")
oringnal="abcdefghijklmnopqrstuvwxyz"
ciphertext="defghijklmnopqrstuvwxyzabc"
def enCode(arg):
    if arg==" ":
        return " "
    else:
        for i in range(26):
            if oringnal[i]==arg:
                return ciphertext[i]
def deCode(arg):
    if arg==" ":
        return " "
    else:
        for i in range(26):
            if ciphertext[i]==arg:
                return oringnal[i]
try:
    str=input("请输入一段英文字符：")
except :
    print("输入错误！")
else:
    print("\n\n加密后的内容如下：")
    for i in range(len(str)):
        print(enCode(str[i]),end="")
    print("\n\n解密后的内容如下：")
    for i in range(len(str)):
        print(deCode(str[i]),end="")