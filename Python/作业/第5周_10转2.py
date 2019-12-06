def cvt_10To2(n):
    list_residue=[]    #　保存余数的列表
    while n:
        list_residue.append(n%2)        # 将余数保存起来 
        n=n//2       # 商 用于判断是否结束循环 当 商为0 的时候结束
    return str(list_residue[::-1]).replace(',','').replace(']','').replace('[','').replace(' ','')
print(cvt_10To2(10))