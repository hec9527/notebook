import time
import requests
import urllib.request
from bs4 import BeautifulSoup
import re

# 初始URL
url = "https://search.jd.com/Search?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&enc=utf-8&qrst=1&rt=1&stop=1&vt=2&psort=3&click=0"


def saveGoodsInfo(txt):
    ''' 将商品的信息按照一定格式写入到文件 '''
    f = open("./JD_computers.csv", 'at', encoding='UTF-8')
    f.write(txt)
    f.close()


def getGoodsInfo(lis):
    ''' 获取商品信息\nlis-->单个商品的URL地址 '''
    _url = 'https:' + lis[0]
    req = requests.get(_url)
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
    strs += band + ','
    # 型号
    ctype = re.findall(r'''<dt>型号</dt><dd>(.*?)</dd>''', html, re.S)
    if len(ctype) == 0 or ctype == '' or ctype == '其他':
        l = html.find('<dt>认证型号</dt>')
        r = html.find('</dl>', l)
        _html = html[l:r]
        ctype = re.findall(r'''</dd><dd>(.*?)</dd>''', _html, re.S)
    if len(ctype) == 0 or ctype == '' or ctype == '其他':
        ctype = '其它'
    else:
        ctype = ctype[0]
    strs += ctype + ','
    # 价格
    strs += str(lis[1]) + ","
    # 处理器型号
    try:
        cpu = re.findall(r'''<dt>CPU类型</dt><dd>(.*?)</dd>''', html)[0]
    except Exception as e:
        cpu = ''
    if cpu == '' or not cpu:
        try:
            cpu = re.findall(r'''<dt>CPU型号</dt><dd>(.*?)</dd>''', html)[0]
        except Exception as e:
            cpu = "其它"
    strs += str(cpu) + ','
    # 处理器频率
    mhz = re.findall(r'''<dt>CPU速度</dt><dd>(.*?)</dd>''', html)
    if mhz == '' or not mhz:
        mhz = "其它"
    else:
        mhz = mhz[0].replace(",", "-").replace("，", "-")
    strs += str(mhz) + ","
    # 处理器核心数目
    coreNum = re.findall(r'''<dt>核心</dt><dd>(.*?)</dd>''', html)
    if coreNum == '' or not coreNum:
        coreNum = '其它'
    else:
        coreNum = coreNum[0]
    strs += str(coreNum) + ','
    # 显卡类型
    disCard = re.findall(r'''<h3>显卡</h3>.*?<dt>类型</dt><dd>(.*?)</dd>''', html,
                         re.S)
    if disCard == '' or not disCard:
        disCard = '其它'
    else:
        disCard = disCard[0]
    strs += str(disCard) + ','
    # 内存型号
    memoeryType = re.findall(r'''(DDR[234]{0,1} [0-9]{0,4})''', html, re.I)
    if memoeryType == '' or not memoeryType:
        memoeryType = re.findall(r'''(lpddr[1234]{0,1} [0-9]{0,4})''', html,
                                 re.I)
    if len(memoeryType) == 0:
        memoeryType = '其它'
    else:
        memoeryType = memoeryType[0]
    strs += str(memoeryType) + ','
    # 内存容量
    memoerySize = re.findall(r'''内存容量：(.*?)</li>''', html, re.S)
    if memoerySize == '' or len(memoerySize) == 0 or memoerySize[0] == '其他':
        memoerySize = '其它'
    else:
        memoerySize = memoerySize[0]
    strs += memoerySize + ','
    # 固态容量
    l = html.find('<dt>固态硬盘</dt>')
    r = html.find('</dd>', l) + 5
    _html = html[l:r]
    SSD = re.findall(r'''<dd>(.*?)</dd>''', _html)
    if len(SSD) == 0 or SSD == '' or SSD[0] == '其他':
        SSD = '其它'
    else:
        SSD = SSD[0]
    strs += SSD + ","
    # 屏幕尺寸
    screen = re.findall(r'''<dt>屏幕规格</dt><dd>(.*?)</dd>''', html, re.S)
    if len(screen) == 0 or screen == '' or screen[0] == '其他':
        screen = '其它'
    else:
        screen = screen[0]
    strs += screen + ','
    # 毛重
    weight = re.findall(r'''商品毛重：(.*?)</li>''', html)
    if weight == '' or len(weight) == 0 or weight == '其他':
        weight == '其它'
    else:
        weight = weight[0]
    strs += weight + ','
    # 续航
    useTime = re.findall(r'''<dt>续航时间</dt><dd>(.*?)</dd>''', html, re.S)
    if useTime == '' or len(useTime) == 0 or useTime == '其他':
        useTime = '其它'
    else:
        useTime = useTime[0].replace(",", '').replace("，", '').replace(
            '具体时间视使用环境而定', '')
    strs += useTime + '\n'
    saveGoodsInfo(strs)


def getGoodsURL(txt):
    ''' 获取页面中的所有的商品的URL\n返回一个列表 '''
    _list = []  # 用于存储该页面的所有商品信息
    bs = BeautifulSoup(txt, "html.parser")
    oLi = bs.findAll('li', class_="gl-item")
    for element in oLi:
        _url = element.find('div', class_='p-img').a['href']
        _price = element.find('div', class_='p-price').strong.i.text
        if _price == '':
            _url = []
            continue
        _list.append([_url, _price])
    return _list


def main(txt):
    ''' 处理初始面中的各种连接 '''
    global url
    goodsURL = []  # 保存所有的商品URL,价格
    goodsPageAll = 100  # 商品的总页数
    # 首页的所有商品共100页，遍历这100页的商品   将页面中的每一个商品的URL添加到列表中
    for page in range(1, goodsPageAll + 1):
        print("正在获取商品URL:" + str('{:.2%}'.format(page / goodsPageAll)),
              end="\r")
        _url = url + "&page=" + str(page * 2)
        _page = urllib.request.urlopen(_url).read().decode()
        lis = getGoodsURL(_page)
        goodsURL.extend(lis)
    # 获取每个商品的相关信息
    clen = len(goodsURL)
    for lis in goodsURL:
        print('正在获取单个商品信息....' +
              str('{:.2%}'.format(goodsURL.index(lis) / clen)),
              end="\r")
        getGoodsInfo(lis)


if __name__ == "__main__":
    ''' 程序入口 初始URL开始爬取其它页面的URL '''
    txt = urllib.request.urlopen(url).read().decode("UTF-8")
    tt = time.time()
    main(txt)
    print('正在获取单个商品信息....100.00%', end='\r')
    print("\n爬取任务结束:耗时{:.2f}S".format(float(time.time()) - float(tt)))

    input("请按Enter关闭窗口...")
    input()
