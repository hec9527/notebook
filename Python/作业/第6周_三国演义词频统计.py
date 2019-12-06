import jieba,time

# 统计出现次数前十的词语

# 统计曹操、关于、诸葛亮、刘备等人名 出现的次数

line = 0  # 从第0行开始读取文件  每次读取500行
f_lst = []  # 用于存放中间分词结果
f_dict = dict()  #用于存放字典类型 保存并且统计最终结果
f_set = set()  # 用于去重     集合


# tt=time.time()
# myfile=open("./jieba_threekingdoms.txt","r").read()
# print("timer："+str(time.time()-tt))
# 最简单粗暴直接的方式也 有 14秒 ！！！！！！

ct = time.time()    #  根据时间统计  四种方式打开文件的时间相仿  大概14s 
# for line in open("./jieba_threekingdoms.txt"):   #　第一次
#     for ch in jieba.lcut(line):
#         if ch not in "，。：；‘’”“！@#￥%（）？、\"":
#             f_lst.append(ch)  # 每次读取的内容切词后存放到 列表里面
# for ch in jieba.lcut(open("./jieba_threekingdoms.txt").read()):    #　第二种
#     f_lst.append(ch)  # 每次读取的内容切词后存放到 列表里面
# f_lst=jieba.lcut(open("./jieba_threekingdoms.txt","r").read())   # 第三种
with open("./jieba_threekingdoms.txt", "r") as f:    # 第四种方法
    for line in f:
        for ch in jieba.lcut(line):
            if ch not in "，。：；‘’”“！@#￥%（）？、\"\r\n\t":
                f_lst.append(ch)
print("读取文件时间："+str(time.time()-ct),end="\n")

ct = time.time()
f_set = set(f_lst)      # 将文中出现的词 放到集合里面，去重
print("列表转集合时间："+str(time.time()-ct),end="\n")

ct = time.time()
for ch in f_set:  # 将去重后的词放到字典里面  方便统计
    f_dict[ch] = 0
print("去重后放到字典时间："+str(time.time()-ct),end="\n")

ct=time.time()
for ch in f_lst:  # 统计每个词出现的次数
    f_dict[ch] = f_dict[ch] + 1
print("统计词出现次数的时间："+str(time.time()-ct),end="\n")

ct=time.time()
dic = sorted(f_dict.items(), key=lambda x: x[1], reverse=True)  # 排序词典
print("排序词典所用的时间："+str(time.time()-ct),end="\n\n\n")

print("出现次数前十的词：\n"+str(dic[0:10]))
# print(dic)  # 打印排序后的字典
print("指定人物出现次数".center(50,"-"))
# 统计曹操、关羽、诸葛亮、刘备等人名 出现的次数

# print(type(dic))  # list

dic = dict(dic)

print("曹操：" + str(dic['曹操']))

print("关羽：" + str(dic["关羽"]))

print("诸葛亮：" + str(dic["诸葛亮"]))

print("刘备：" + str(dic["刘备"]))


input(">")