def prime(arg1):
    '''用于获取给定的整数之内的所有素数，并且返回按照升序排列的列表'''
    """素数 : 大于0 的自然数中 除了它本身和1 不再有其它公因数 """
    global lst
    for i in range(3,int(arg1)+1):    #  包含输入的值
        flag=False     # 标识是否有其它因数
        for j in range(2,i):
            if i%j==0:
                flag=True
                break
        if flag!=True:
            lst.append(i)

def bi_search(num, left=-2, right=0):
    '''使用 递归 ---- 二分法查看给定的整数在列表中的索引  不存在则返回 -1'''
    global lst
    if left == right:  #　　左右标相等　或者差为１　即相连　则返回
        return - 1
    elif left == -2:   # 第一次的时候确定查找的范围  0-最后一个   确定搜索的左右范围
        left, right = 0, len(lst)

    middle = len(lst[left:right]) // 2 + left  # 最中间的这个数的索引
    if right - left == 1:   # 极端情况 输入的值为右边界的时候      middle无法取到右边界
        if lst[left] == num:
            return left
        elif lst[right] == num:
            return right
        else:
            return -1
    else:
        if lst[middle] == num: return middle  # 如果某一个下标的值 如输入的值相等则返回除去   即 基例 为第一次就选中
        elif lst[middle] < num: return bi_search(num, middle, right)
        elif lst[middle] > num: return bi_search(num, left, middle)
        else: return - 1

lst = [2]  # 2肯定是素数 因为遍历从2到arg-1   所以为了防止出现2被pass掉  单独提出来
prime(int(input("请输入生成素数的上限：")))  #  给定一个整数  生成小于这个整数的素数列表  从小到大顺序
print(bi_search(int(input("请输入要查询的数："))))  #　给定需要查找的数　　　返回在这个列表中的索引　如果没有　则返回　-1
input("请按回车继续...")
