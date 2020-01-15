import urllib.request
import http.cookiejar

import custom_header
custom_header.lib_requests()





url = 'http://www.baidu.com/'
headers = [
    ("Accept", "*/*"),
    ("Accept-Encoding", "gzip, deflate, br,gb2312,utf-8"),
    ("Accept-Language", "zh-CN,zh;q=0.9"),
    ("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.6788.400 QQBrowser/10.3.2767.400"),
    ("Connection", "keep-alive"),
    ("Referer", "baidu.com"),
]
cjar = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cjar))

opener.addheaders = headers
urllib.request.install_opener(opener)
data = urllib.request.urlopen(url).read()

print(type(data))
print(data)

f = open("./9_爬虫的浏览器伪装.html",'wb')
f.write(data)
f.close()