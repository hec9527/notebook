import urllib.request
import re

def mapPrivence(html):
    ''' 获取省对应的URL '''
    global dict_URL_privence   # 使用全局字典保存每个省  以及他们的URL  方便之后遍历
    urlhead = 'http://www.ip138.com/'  # 每个省的URL的相同部分
    # 确立需要正则匹配的区域减少运算   同时降低匹配项的干扰
    left, right = '<table cellpadding="2" cellspacing="1"', '<map name="map_86" id="map_86">'   # 设置查找区域的左右边界
    html = html[html.find(left):html.find(right)]
    # 查询每个省的编号
    exp = r'<a href="/[0-9]{0,2}[a-z]{0,10}'  # 用于匹配省编号的正则表达式
    result_num = re.findall(exp, html,re.M)
    # 查询每个省的名字
    exp = r'_blank">.{2,12}'  # 用于匹配省的名字的正则表达式
    result_privence = re.findall(exp, html, re.M)
    # 映射每个省以及对应的网址    同时做一些截取 处理  清除多余的文字
    for i in range(len(result_num)):
        name = result_privence[i][8:result_privence[i].find('</a>')]
        dict_URL_privence[name] = urlhead + result_num[i][10:]+"/"

def URL_iteration():
    ''' 遍历获取到的省的URL页面\n
        并且将获取到的信息传递到writePost写入到文件 ''' 
    for i in dict_URL_privence.keys():
        writePost(i, 0)  # 直辖市、自治区、特别行政区、、、
        getCityPost(dict_URL_privence[i])
        writePost("\n\n",1)

def getCityPost(_url):
    ''' _url ---> 需要爬取的网页URL \n
        return 爬取页面中的post信息 - - -string with \n ''' 
    # 获取并且剪切需要匹配的文本
    string = urllib.request.urlopen(_url, timeout=12).read().decode("GBK")    # 剪切页面中有关省下级的市的信息 
    left, right = '<table cellpadding="0" cellspacing="1"', '< table width = "960"'  # 设置查找区域的左右边界
    string = string[string.find(left) + len(left):string.find(right)]
    # 查找需要匹配的------市  名字------
    exp = r'<b>.{2,15}</a></b>'  # 用于匹配每个市 的名字
    result_city = re.findall(exp, string, re.M)
    # 查找需要匹配的------市   邮编------
    exp = r'</a></b></td><td><a href="/[0-9]{3,6}'  # 用于匹配每个市的邮政编码
    result_cityPost = re.findall(exp, string, re.M)
    # 循环写入每个市的邮编  以及遍历每个市的每个县城的邮编
    if len(result_city) == 0:
        getCountyPost(string)
    for i in range(len(result_city)):
        if result_city[i][3:-8] == "金门县":
            result_cityPost.insert(i, "xxx")
        if result_cityPost[i][-6:][2] == "/":
            writePost(result_city[i][3:-8] + "\t" + result_cityPost[i][-6:][3:], 1)  # 写入 市 的信息
        else:
            writePost(result_city[i][3:-8]+"\t"+result_cityPost[i][-6:], 1)     # 写入 市 的信息
        # 截取页面中相应的市下面的县城 信息传递到 getCountyPost() 获取每个县城的邮编
        if i == len(result_cityPost)-1:
            _string = string[string.find(result_cityPost[-1]):-1]
        else:
            _string = string[string.find(result_cityPost[i]):string.find(result_cityPost[i + 1])]
        getCountyPost(_string)  # 获取每个县的邮编

def getCountyPost(string):
    ''' 获取每个县的邮编并且写入到文件\n
        string - - - - -> 需要匹配的文本'''
    # 查找需要匹配的------县、区   名字------
    exp = r'<td>.{3,15}</td><td><a href="/'  # 用于匹配每个县城的名字的正则表达式
    result_county = re.findall(exp, string, re.M)
    # 查找需要匹配的------县、区    邮编------  
    exp = r'<td>.{3,15}</td><td><a href="/[0-9]{3,6}'  # 用于匹配每个县城的邮编的正则表达式
    result_countyPost = re.findall(exp, string, re.M)
    # 在该市有下级行政区的情况下   遍历该市的所有县城
    for i in range(len(result_county)):
        if result_countyPost[i][-6:][2] == "/":
            writePost(result_county[i][4:result_county[i].find("</td>")]+"\t"+result_countyPost[i][-6:][3:], 2)
        else:
            writePost(result_county[i][4:result_county[i].find("</td>")]+"\t"+result_countyPost[i][-6:], 2)

def writePost(string, head=0):
    ''' 将邮编信息写入到文档\n
        string ----> 写入的数据\n 
        head ----> 行首加入制表符\\t的数量 ''' 
    global f
    if head == 0:     # 省、特别行政区....
        string = string.center(30,"=") + "\n"
    elif head == 1:   # 市
        string = string + "\n"
    elif head == 2:   # 县
        string = "\t" + string + "\n"
    f.write(string)

if __name__ == "__main__":
    url = "http://www.ip138.com/post/"  #初始URL
    dict_URL_privence = {}  #查看各个省的下级目录URL
    f = open("./source/chinaPost.txt", 'at')

    html = urllib.request.urlopen(url, timeout=10).read().decode("GBK")
    mapPrivence(html)
    URL_iteration() 
    f.close()

''' 坑爹-----台湾  邮编3位  大陆6位 ''' 
''' 坑爹-----台湾  金门县  没有邮编 ''' 