import requests

# URL列表
url = 'http://www.baidu.com/s?ie=utf8&oe=utf8&wd=从零开始的异界生活'

req = requests.get(url)

req_str = req.text

req_str = req_str.encode()

print(req_str)


f = open("E://Python/python_Reptilian/source/2_getImage.html", "wb")
f.write(req_str)
f.close()
