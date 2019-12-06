#文件操作
fo=open("./python_file_write.txt","w+")
ls=['中国','美国','英国']
fo.writelines(ls)
fo.seek(0)      # 文件在最后一个位置  所以重置到第一位然后才能打印文件
for line in fo:
    print(line)
fo.close()
