import time, threading, requests, os, re, shutil


def checkAlltaskOver():
    '''检测任务：\n
        检测每个任务的完成情况，全部完成则返回True\n
        否则返回Flase'''
    global taskPercent
    for i in range(5):
        if taskPercent[i] != 1:
            return False
    return True


def task_showMsg():
    '''显示消息队列里面的消息，显示一条删除一条\n
        显示文本进度条，任务的总进度
    '''
    global msg, taskPercent
    while True:
        if checkAlltaskOver():
            break
        else:
            mean = sum(taskPercent) / len(taskPercent)
            if mean != 0.0:
                mean = '{:.1%}'.format(mean)  # 所有任务的进度平均值即为总进度
                ms = ">>>当前任务总进度:" + str(mean) + "<<<"
            else:
                ms = '阻塞：正在等待子线程数据'
            msg.append(ms)
            if len(msg) <= 1:
                continue
            elif len(msg) >= 4:
                msg = msg[-2:]
            else:
                print(msg[0], end='\r')
                msg.pop(0)
        time.sleep(1)


def task_getGoodsInfo(taskIndex, lis):
    '''
        子线程任务\n
        taskIndex-->线程的索引\n
        lis-->当前的商品的URL以及价格信息\n
        lis=[url,price]
    '''
    global msg
    _url = 'https:' + lis[0]
    try:
        req = requests.get(_url)
    except Exception:  # 如果请求被强制关闭则递归调用，直到返回网页源码
        print(f'Task_{taskIndex}被强制关闭，正在重新访问...\n')
        return task_getGoodsInfo(taskIndex, lis)
    req.encoding = req.encoding
    html = req.text
    # 用于临时存放单个商品的信息的字符串
    strs = ''
    # 品牌
    exp = re.compile(r'''id="parameter-brand".*?<li title='(.*?)'>''', re.S)
    band = re.findall(exp, html)
    band = '其它' if len(band) == 0 or band == '' or band == '其他' else band[
        0]  # 三元运算符
    strs += str(band) + ','
    # 价格
    strs += str(lis[1]) + ","  # 价格用参数传递过来
    # 内存容量
    exp = re.compile(r'''内存容量：(.*?)</li>''')
    mSize = re.findall(exp, html)
    mSize = '其它' if mSize == '' or len(
        mSize) == 0 or mSize[0] == '其他' else mSize[0]
    strs += str(mSize) + ','
    # 屏幕尺寸
    exp = re.compile(r'''<dt>屏幕规格</dt><dd>(.*?)</dd>''', re.S)
    screen = re.findall(exp, html)
    screen = '其它' if len(
        screen) == 0 or screen == '' or screen[0] == '其他' else screen[0]
    strs += "".join(screen) + ','
    # 毛重
    exp = re.compile(r'''<dt>净重</dt><dd>(.*?)</dd>''', re.S)
    weight = re.findall(exp, html)
    weight == '其它' if weight == '' or len(
        weight) == '0' or weight == '其他' else weight[0]
    strs += "".join(weight) + "\n"
    # 返回该商品的信息
    return strs


def task_getGoodsURL(txt):
    ''' 子线程任务\n
        txt-->网页的源码\n
        return-->页面中的商品URL返回一个二级列表\n
        [\n
            [url,price],\n
            [url,price],\n\t    ...
        ]\n
        返回商品的ＵＲＬ以及价格信息
    '''
    lis = []  # 用于保存该页面存储的所有商品信息
    exp = re.compile(r'<li.*?class="gl-item.*?href="(.*?)"', re.S)
    url = re.findall(exp, txt)
    exp = re.compile(r'<div class="p-price">.*?<i>(.*?)</i>', re.S)
    price = re.findall(exp, txt)
    for i in range(len(price)):
        lis.append([url[i], price[i]])
    # for i in zip(url, price):   # 上面的循环 换一种写法 性能优势不知道
    #     lis.append(i)
    return lis


def task_Main(Tindex, Pstart, Pend):
    '''子线程的主函数\n
        遍历给定的页面数据获取相应的URL\n
        遍历获取的URL获取相应的商品信息\n
    '''
    global msg
    url = "https://search.jd.com/Search?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&enc=utf-8&qrst=1&rt=1&stop=1&vt=2&psort=3&click=0&page="
    # 遍历所给的网页页码获取其中的信息
    for i in range(Pstart, Pend):
        # 获取当前页码的源码
        _url = url + str(i * 2)  # 因为1 2 页的数据都是相同的所以跳过一页
        resp = requests.get(_url)
        resp.encoding = resp.encoding
        txt = resp.text
        # 遍历获取到的网页地址  遍历获取它们中的商品信息
        strs = ''
        for u in task_getGoodsURL(txt):  # 遍历列表中的所有数据
            strs += task_getGoodsInfo(Tindex, u)  #  将获取到的商品信息写  保存到字符串中
        goodsInfo.append(strs)  # 将保存的商品信息存放到列表中
        # 修改当前的进度条
        percent = (i - Pstart) / (Pend - Pstart)
        taskPercent[Tindex - 1] = percent
        ms = 'Task_' + str(Tindex) + '进度：' + '{:.2%}'.format(percent)

    # 该线程的任务结束,输出到屏幕
    taskPercent[Tindex - 1] = 1
    ms = 'Task_' + str(Tindex) + "运行结束..."
    msg.pop(0)  # 删除消息列表中的部分数据  添加线程信息
    msg.append(ms)


def taskManager(taskIndex, pageStart, pageEnd):
    ''' --任务管理器--\n
        负责从传递的参数中开启相应的任务\n
        taskIndex-->子线程的索引\n
        pageStart-->该子线程需要负责的页面的起始页\n
        pageEnd-->该子线程需要负责的页面的结束页 '''
    global msg
    if not taskIndex or not pageEnd or not pageStart:
        print('子线程启动错误，部分参数为空！')
        print(
            f'当前taskIndex:{taskIndex}\n\t当前pageStart:{pageStart}\n\t当前pageEnd:{pageEnd}'
        )
        return False
    else:
        task = threading.Thread(target=task_Main,
                                args=(taskIndex, pageStart, pageEnd))
        task.start()


def main(tt):
    '''程序主函数\n
       循环：开启多线程、检测子线程状况、合并子线程处理后的数据
    '''
    # 设置全部子线程为开启，结束的时候关闭   每一个参数表示一个进程是否关闭 False 进程没有关闭
    taskIndex = 1  # 线程的索引---唯一标志       5个线程同时运行
    cpage = 1  # 当前的索引值
    # 显示消息队列
    task_show = threading.Thread(target=task_showMsg)
    task_show.start()
    # 调用多线程获取商品的URL 以及其它信息写入到临时文件
    while True:
        if taskIndex > 5:  # 线程数大于5退出   因为只打开5个线程
            break
        else:
            taskManager(taskIndex, cpage, cpage + 20)  # 生成新的线程、分别爬取部分数据
            cpage += 20
            taskIndex += 1
    # 当文件已经存在的时候删除文件
    if os.path.isfile("./JD_computer.csv"):  # 如果上次运行之后合并的文件存在则删除，如果要保存请备份
        os.remove("./JD_computer.csv")
    f = open("./JD_computer.csv", 'at', encoding='UTF-8')
    # 当任务还没有结束的时候继续
    while True:
        if checkAlltaskOver():  # 所有任务完成之后才打印任务耗时
            print(">>>当前任务总进度:100% <<<", end="\r")
            print("\n爬取任务结束:耗时{:.2f}S".format(float(time.time()) - float(tt)))
            input("请按Enter关闭窗口...")
            break
        else:  # 当任务还没有完成的时候   写入数据到文件
            if len(goodsInfo) > 0:
                f.write(goodsInfo[0])
                goodsInfo.pop(0)
            else:
                time.sleep(1)
    f.close()


if __name__ == "__main__":
    ''' 程序入口  '''
    msg = ['正在初始化程序...', '正在开启多线程任务...']  # 设置全局消息显示
    taskPercent = [0, 0, 0, 0, 0]  # 每个子进程的进度条   同时用于检测任务是否完成
    goodsInfo = []  # 用于保存所有的商品信息
    tt = time.time()  # 用于保存程序运行开始的时间   方便计算程序运行的总时间
    main(tt)
