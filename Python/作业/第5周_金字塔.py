# 第一种方法  拆分每一行需要打印的字符串 分别打印
def printer1(line_num,char_print):
    for i in range(line_num):     # 循环打印每一行
        print("")      # 打印每一行之前换行
        left=line_num-i-1     # 左边需要打印的个数
        for j in range(left):   # 打印左边的空白
            print("",end=" ")
        middle=2*(i+1)-1     # 中间需要打印的个数
        for k in range(middle):   # 打印中间的字符
            print(char_print,end="")

# 第二种方法  利用字符串的居中以及字符串的修改来完成
def printer2(n,char):
    line_str=char           # 需要打印的字符串
    line_len=2*n        # 最后一行的长度
    print("")
    for i in range(n):    # 循环遍历输出每一行
        print(line_str.center(line_len," "))  #　利用字符串的居中完成
        line_str+=2*char    # 将需要打印的字符串添加长度

try:
    line_num=int(input(">Line number:"))
    char_print=input(">The char print in console:")
    if len(char_print)>1 or char_print == " " or not char_print:
        print("Invalid char to print!")
        raise Exception
    if line_num<=0:
        print("Invalid line num!")
except Exception as e:
    print(e)
else:
    printer1(line_num,char_print)
    printer2(line_num,char_print)



input("> Please enter any key to continue....")