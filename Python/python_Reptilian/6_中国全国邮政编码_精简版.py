import urllib.request,re

def mapPrivence(html):
    html = html[html.find('<table cellpadding="2"'):html.find('<map name="map_86')]  # 确立需要正则匹配的区域减少运算   同时降低匹配项的干扰
    result_num, result_privence = reResult(r'<a href="(/[0-9]{0,2}[a-z]{0,10})/"', r'_blank">(.{3,12})</a>',html)# 保存每个省的名字和他们的URL 
    for i in range(len(result_num)):
        url = urlhead + result_num[i]
        writePost(result_privence[i], 0)
        getCityPost(url)
        writePost("\n",1)
            
def getCityPost(_url):   # 处理市级单位
    string = urllib.request.urlopen(_url, timeout=12).read().decode("GBK")    # 剪切页面中有关省下级的市的信息 
    string = string[string.find('<table cellpadding="0"'):string.find('<table width = "960"')]  # 截取字符串
    cityName, cityPost = reResult(r'<b>(.{2,15})</a></b>', r'</a></b></td><td><a href="/([0-9]{3,6})',string)  # 保存匹配之后的市的名字 以及邮编
    if len(cityName) == 0: getCountyPost(string)  # 特别行政区、特殊市下面没有县
    for i in range(len(cityName)):  # 市下面有县的 每次调用 getCountyPost() 匹配并且写入县的邮编
        if cityName[i] == "金门县":  cityPost.insert(i, "xxx")  # 金门县  没有邮编
        post = cityPost[i][3:] if cityPost[i][2] == "/" else cityPost[i]  # 台湾的邮编为3位和大陆不同 大陆6位
        writePost(cityName[i] + "    " + post, 1)  # 写入 市 的信息
        if i == len(cityPost) - 1:
            _string = string[string.find(cityPost[-1]):-1]
        else:
            _string = string[string.find(cityPost[i]):string.find(cityPost[i + 1])]
        getCountyPost(_string)  # 获取每个县的名字以及邮编  

def getCountyPost(string):  # 获取每个县的名字以及邮编
    countyName, countyPost = reResult(r'<td>(.{3,15})</td><td><a href="/', r'<td>.{3,15}</td><td><a href="/([0-9]{3,6})',string) # 用于保存县级单位的名字以及邮编
    for i in range(len(countyName)):   # 遍历每一个县 将他们的名字以及邮编 写入到文本文件中
        post = countyPost[i][3:] if countyPost[i][2] == "/" else countyPost[i]  #台湾的邮编位3位 特别处理
        writePost(countyName[i] + "    " + post, 2)  # 写入到文本
       
def reResult(exp1, exp2,string):  # 用于从传入的字符串中匹配满足的项
    return re.findall(exp1, string, re.M), re.findall(exp2, string, re.M)

def writePost(string, head=0):  # 写入到文本文件 并且 按照某种格式
    string = "   " * head + string + "\n"
    f.write(string)

if __name__ == "__main__":  # 主函数入口
    url, urlhead = "http://www.ip138.com/post/", 'http://www.ip138.com/'  #初始URL,每个省的URL相同部分,用于存放省URL列表的字典
    html, f = urllib.request.urlopen(url).read().decode("GBK"), open("./source/chinaPost.txt", 'at') # 初始的URL返回的文本文件，打开的文件
    mapPrivence(html)  # 映射省以及他们的URL到字典中
    f.close()  # 关闭文件
