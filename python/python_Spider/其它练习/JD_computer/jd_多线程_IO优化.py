import time
import threading
import requests
import os
from bs4 import BeautifulSoup
import re
import shutil

# 初始URL
url = "https://search.jd.com/Search?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&enc=utf-8&qrst=1&rt=1&stop=1&vt=2&psort=3&click=0&page="
msg = ['正在初始化程序...', '正在开启多线程任务...', '阻塞：等待子线程数据...']  # 设置全局消息显示
taskPercent = [0, 0, 0, 0, 0]
ifTaskOver = []  # 用于保存已经完成的线程的索引
taskOver = []  # 子线程是否结束
ALLOVER = False


def ifAlltaskOver():
    '''
        检测任务：\n
            检测每个任务的完成情况，全部完成则返回True\n
            否则返回Flase
    '''
    for i in range(5):
        if taskOver[i] == False:
            return False
    return True


def log(txt):
    '''
        打印任务日志:\n
        将程序运行中的日志打印到文件方便查看
    '''
    f = open("./log.txt", 'at', encoding='utf-8')
    f.write(str(txt) + "\n")
    f.close()


def coBinFile(tindex):
    '''
        主线程最后调用的函数\n
        每次有子线程完成任务的时候调用\n
        将子线程中存储的临时文件整合到一个新的文件\n
        tindex--->已经完成任务的子程序的索引\n
    '''

    global ALLOVER
    ms = "Task_" + str(tindex) + "任务完成，主线程正在合并文件..."
    log(ms)
    fileName = "./temp/Temp_JD_computers_" + str(tindex) + '.csv'
    f1 = open(fileName, 'rt', encoding='utf-8')
    fil = open("./JD_computers.csv", 'at', encoding='utf-8')
    txt1 = f1.read()
    fil.write(txt1)
    f1.close()
    fil.close()
    if ifAlltaskOver():  # 完成最后任务、结束程序
        ALLOVER = True


def showMsg():
    '''
        显示消息队列里面的消息，显示一条删除一条\n
        显示文本进度条，任务的总进度
    '''
    global msg, taskPercent
    while True:
        if ALLOVER:
            print(">>>当前任务总进度:100% <<<", end="\r")
            break
        else:
            time.sleep(0.5)
            mean = sum(taskPercent) / len(taskPercent)
            mean = '{:.1%}'.format(mean)  # 所有任务的进度平均值即为总进度
            ms = ">>>当前任务总进度:" + str(mean) + "<<<"
            msg.append(ms)
            if len(msg) <= 1:
                continue
            else:
                print(msg[0], end='\r')
                msg.pop(0)


def task_saveGoodsInfo(taskIndex, txt, flag):
    '''
        子线程任务\n
        将商品的信息按照一定格式写入到文件\n
        taskIndex-->子线程的位移索引\n
        txt-->需要写入到文件的数据\n
        flag-->是否是最后一个操作
    '''
    global taskOver, ifTaskOver
    if not os.path.exists("./temp/"):
        os.mkdir("./temp/")
    filePath = './temp/Temp_JD_computers_' + str(taskIndex) + ".csv"
    f = open(filePath, 'at', encoding='UTF-8')
    f.write(txt)
    f.close()
    if flag:
        ms = 'Task_' + str(taskIndex) + "运行结束..."
        log(ms)
        ifTaskOver.append(taskIndex)  # 添加当前的线程的编号到列表
        taskOver[taskIndex - 1] = True
    return False


def task_getGoodsInfo(taskIndex, lis):
    '''
        子线程任务\n
        taskIndex-->线程的索引\n
        lis-->当前的商品的URL以及价格信息\n
        lis=[url,price]
    '''
    _url = 'https:' + lis[0]
    try:
        req = requests.get(_url)
    except Exception as e:
        log(str(e))
        ms = 'Task_' + str(taskIndex) + "被强制关闭，正在重新访问...\n"
        msg.insert(ms, 0)
        msg.pop(1)
        task_getGoodsInfo(taskIndex, lis)
        return
    req.encoding = req.encoding
    html = req.text
    # 用于临时存放单个商品的信息的字符串
    strs = ''
    # 品牌
    band = re.findall(r'''id="parameter-brand".*?<li title='(.*?)'>''', html,
                      re.S)
    if len(band) == 0 or band == '' or band == '其他':
        band = '其它'
    else:
        band = band[0]
    strs += str(band) + ','
    # 价格
    strs += str(lis[1]) + ","
    # 内存容量
    memoerySize = re.findall(r'''内存容量：(.*?)</li>''', html, re.S)
    if memoerySize == '' or len(memoerySize) == 0 or memoerySize[0] == '其他':
        memoerySize = '其它'
    else:
        memoerySize = memoerySize[0]
    strs += str(memoerySize) + ','
    # 屏幕尺寸
    screen = re.findall(r'''<dt>屏幕规格</dt><dd>(.*?)</dd>''', html, re.S)
    if len(screen) == 0 or screen == '' or screen[0] == '其他':
        screen = '其它'
    else:
        screen = screen[0]
    strs += str(screen) + ','
    # 毛重
    weight = re.findall(r'''商品毛重：(.*?)</li>''', html)
    if weight == '' or len(weight) == 0 or weight == '其他':
        weight == '其它'
    else:
        weight = weight[0]
    strs += str(weight) + "\n"
    return strs


def task_getGoodsURL(txt):
    ''' 
        子线程任务\n
            txt-->网页的源码\n
            return-->页面中的商品URL返回一个二级列表\n
            [\n
                [url,price],\n
                [url,price],\n
            ]\n
            返回商品的ＵＲＬ以及价格信息
    '''
    _list = []  # 用于存储该页面的所有商品信息
    bs = BeautifulSoup(txt, "html.parser")
    oLi = bs.findAll('li', class_="gl-item")
    for element in oLi:
        _url = element.find('div', class_='p-img').a['href']
        _price = element.find('div', class_='p-price').strong.i.text
        if _price == '':  # 去除没有价格的商品
            _url = []
            continue
        else:
            _list.append([_url, _price])
    return _list


def taskMain(Tindex, Pstart, Pend):
    '''
        --- 子线程的主函数 ---\n
        子线程主循环：\n
            遍历给定的页面数据获取相应的URL\n
            遍历获取的URL获取相应的商品信息\n
    '''
    global url
    for i in range(Pstart, Pend):
        lis = []
        _url = url + str(i * 2)  # 因为1 2 页的数据都是相同的所以跳过一页
        resp = requests.get(_url)
        resp.encoding = resp.encoding
        txt = resp.text
        lis = task_getGoodsURL(txt)
        strs = ''
        for u in lis:  # 遍历列表中的所有数据
            strs += task_getGoodsInfo(Tindex, u)
        flag = True if i >= Pend - 1 else False  # 是否是该任务的最后一个页面 并且是该列表中的最后一个商品
        task_saveGoodsInfo(Tindex, strs, flag)

        # 修改当前的进度条
        percent = (i - Pstart) / (Pend - Pstart)
        taskPercent[Tindex - 1] = percent
        ms = 'Task_' + str(Tindex) + '进度：' + '{:.2%}'.format(percent)
        log(ms)


def taskManager(taskIndex, pageStart, pageEnd):
    ''' --任务管理器--\n
        负责从传递的参数中开启相应的任务\n
        taskIndex-->子线程的索引\n
        pageStart-->该子线程需要负责的页面的起始页\n
        pageEnd-->该子线程需要负责的页面的结束页 '''
    if not taskIndex or not pageEnd or not pageStart:
        ms = '开启任务出错，参数为空！'
        log(ms)
        ms = '当前taskIndex:' + \
            str(taskIndex) + "当前pageStart:" + \
            str(pageStart) + "当前pageEnd:" + str(pageEnd)
        log(ms)
    else:
        ms = 'Task_' + str(taskIndex) + '成功开启'
        task = threading.Thread(target=taskMain,
                                args=(taskIndex, pageStart, pageEnd))
        task.start()
        log(ms)


def main():
    '''程序主函数\n
       循环：开启多线程、检测子线程状况、合并子线程处理后的数据
    '''
    global taskOver, ifTaskOver
    # 设置全部子线程为开启，结束的时候关闭   每一个参数表示一个进程是否关闭 False 进程没有关闭
    taskOver = [False for i in range(5)]
    taskNum = 5  # 通过线程数量确定每个线程需要处理的数据量
    taskIndex = 1  # 线程的索引---唯一标志
    cpage = 1  # 当前的索引值

    # 显示消息队列
    task = threading.Thread(target=showMsg)
    task.start()

    # 调用多线程获取商品的URL 以及其它信息写入到临时文件
    while True:
        if taskIndex > taskNum:
            break
        else:
            taskManager(taskIndex, cpage, cpage + 20)  # 生成新的线程、分别爬取部分数据
            cpage += 20
            taskIndex += 1

    # 当所有的线程都完成的时候
    time.sleep(130)  # 主线程休息130秒等待子线程的结果
    while True:
        if len(ifTaskOver) > 0:  # 有新的任完成则添加到列表，修理后删除
            tindex = ifTaskOver.pop(0)
            coBinFile(tindex)
            if ifAlltaskOver():  # 是否所有的子线程都完成了任务
                break
        else:  # 没有线程运行结束   继续等待
            time.sleep(3)


if __name__ == "__main__":
    ''' 程序入口  '''
    if os.path.isdir("./temp/"):  # 容错处理 删除临时文件防止干扰程序结果
        shutil.rmtree("./temp/")
    if os.path.isfile("./JD_computer.csv"):  # 如果上次运行之后合并的文件存在则删除，如果要保存请备份
        os.remove("./JD_computer.csv")
    tt = time.time()
    main()
    f = True
    if ALLOVER:  # 所有任务完成之后才打印任务耗时
        time.sleep(1)  # 等待消息队列打印完
        shutil.rmtree("./temp")
        print("\n爬取任务结束:耗时{:.2f}S".format(float(time.time()) - float(tt)))
        input("请按Enter关闭窗口...")
