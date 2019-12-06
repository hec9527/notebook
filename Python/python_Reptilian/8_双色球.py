import requests
import threading
import re
import time
import os
from lxml import etree

'''
    @time:2018-12-1
    @author:hc
    @last change:2018-12-1
    @last change by:hc
'''

tt=time.time()
taskAlive = [1, 1, 1, 1]
fileString = []

def checkAlive():
    for i in range(4):
        if taskAlive[i] == 1:
            return True
    return False

def T_getInfo(Tindex, txt, pag):
    global fileString
    lis = []
    # 日期
    exp = re.compile(r'<td align="center">([0-9]{4}-[0-9]{1,2}-[0-9]{1,2})</td>', re.S)
    lis.append(re.findall(exp, txt))
    # 期号
    exp=re.compile(r'<td align="center">([0-9]{7,8})</td>')
    lis.append(re.findall(exp, txt))
    # 红
    exp = re.compile(r'<td align="center".*?([0-9]{2})</em>.*?([0-9]{2})</em>.*?([0-9]{2})</em>.*?([0-9]{2})</em>.*?([0-9]{2}).*?([0-9]{2})', re.S)
    red = re.findall(exp, txt)
    for i in range(len(red)):
        red[i] = "".join(red[i])
    lis.append(red)
    # 蓝色
    exp = re.compile(r'<em>([0-9]{2})</em></td>')
    lis.append(re.findall(exp, txt))
    # 销售金额
    exp = re.compile(r'<td><strong>(.*?)</strong></td>')
    lis.append(re.findall(exp, txt))
    # 一等奖___获得者人数
    dom = etree.HTML(txt)
    lis.append(dom.xpath("//td[@align='left']/strong/text()"))
    # 一等奖___获得者省
    reward1_pre = dom.xpath("//td[@align='left']/text()")
    for i in range(len(reward1_pre)):  # 获取的数据有多余的  删除掉
        reward1_pre[i] = reward1_pre[i].replace("\r\n", '').replace(" ", "")
    lis.append(reward1_pre)
    # 二等奖
    lis.append(dom.xpath('''//td[@align="center"]/strong[@class="rc"]/text()'''))
    # 将该页面所有的信息保存为字符串  方便写入
    strs=''
    for i in range(len(lis[0])):
        line = ''
        for j in range(len(lis)):
            line += "".join(lis[j][i]) + '  ' if lis[j][i] != '' else '(无)'
        strs += line + "\n"
    fileString.append(strs)

def T_main(Tindex, Pstart, Pend):
    global taskAlive
    for i in range(Pstart, Pend):
        url = f'http://kaijiang.zhcw.com/zhcw/inc/ssq/ssq_wqhg.jsp?pageNum={i}'  # 拼接网址
        res = requests.get(url)
        res.encoding = res.encoding
        txt = res.text
        T_getInfo(Tindex, txt, i)
    taskAlive[Tindex - 1] = 0

def taskManager(Tindex, Pstart, Pend):
    task = threading.Thread(target=T_main, args=(Tindex, Pstart, Pend))
    task.start()
    print(f"爬取线程{Tindex}启动")

def main():
    global fileString
    PageIndexB = 1  # 任务的起始页
    PageIndexE = 118  #  任务页数最后一页
    taskIndex = 1  # 线程的标记
    taskperone = 30  # 每个线程的任务长度  长度越长子线程的数量越少
    flag = False  # 退出循环
    # 开启爬取线程
    while not flag:  # 通过循环开启新的线程
        pb = PageIndexB + taskperone
        if pb > PageIndexE:
            pb = PageIndexE + 1
            flag = True
        taskManager(taskIndex, PageIndexB, pb)
        taskIndex += 1
        PageIndexB += taskperone

    # 检测子线程的运行状态   循环写入数据到文件
    if os.path.isfile("./双色球.txt"):
        os.remove("./双色球.txt")
    f = open("./双色球.txt", 'at', encoding='utf-8')
    while True:
        if len(fileString) > 0:
            f.write(fileString[0])
            fileString.pop(0)
        else:
            if not checkAlive():
                break
            time.sleep(1)
    f.close()

if __name__ == "__main__":
    main()
    print(f"程序总共运行时间为:{int(time.time())-int(tt)}S")
    input("请按Enter退出...")