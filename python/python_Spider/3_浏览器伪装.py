import urllib.request

url = "https://image.baidu.com/search/index?ct=&z=&tn=baiduimage&ipn=r&word=%E5%A3%81%E7%BA%B8&pn=0&istype=2&ie=utf-8&oe=utf-8&cl=&lm=-1&st=-1&fr=&fmq=1526269427171_R&ic=0&se=&sme=&width=1920&height=1200&face=0"

# headers = ("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.6735.400 QQBrowser/10.2.2614.400")

req = urllib.request.Request(url)

req.add_header(
    "User-Agent",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.6735.400 QQBrowser/10.2.2614.400"
)
# req.add_header(headers)

data = urllib.request.urlopen(req).read()  #注意此处的参数使用的是 req

print(data)
