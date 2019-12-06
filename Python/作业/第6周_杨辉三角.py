def print_triangle(num):
    '''输出杨辉三角形'''
    global lst
    num = int(num)
    for i in range(0, num):  # 遍历每一行
        _lst=[]      # 新的一行的值
        for j in range(0, i + 2):  #  新增一行
            _lst.append(1) if j == 0 or j == i + 1 else _lst.append(lst[i][j] + lst[i][j - 1])
        lst.append(_lst)    # 将这一行添加到 二维列表中

   
    # 打印杨辉三角
    for i in range(len(lst)):
        print()
        for j in range(len(lst)-i):
            print("{:^4}".format(" "), end="")
        for k in range(i + 1):
            print("{:^8}".format(lst[i][k]),end="")


lst = [[1]]   # 第一行为一个1
print_triangle(15)

