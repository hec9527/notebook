# 基数排序法
# 递归从个位开始排序，到数组最大的一个的长度


arr = [1, 21, 121, 212, 1111, 23131, 467894689034778934, 2323,5435345546]

def radixSort(arr, numLen=0, sortTime=0):
    if numLen==0:
        numLen = len(str(max(arr)))
    dic = { x: [] for x in range(10)}
    # 排序次数和数组中最长的数字长度相等
    if numLen == sortTime:
        return arr
    else:  # 排序
        for num in arr:
            residue = (num // pow(10, sortTime)) % 10
            if 0 < residue < 1:
                residue = 0
            dic[residue].append(num)
    lis = []
    for items in dic.items():
        lis.extend(items[1])
    sortTime += 1
    return radixSort(lis, numLen, sortTime)


print(radixSort(arr))
