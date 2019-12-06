import urllib.request

url = "http://www.baidu.com/index.html"
response = urllib.request.urlopen(url)

print("响应网页的头信息\n",response.info())

print("\n响应网页的状态码：",response.getcode())

print("\n响应网的URL：", response.geturl())

f = open("E:/Python/python_Reptilian/source/1_baidu_source.html", "wb")
f.write(response.read())
f.close()
