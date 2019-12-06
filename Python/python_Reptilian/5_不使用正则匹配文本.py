import urllib.request


url = "http://www.ip38.com/ip.php?ip="  # 117.136.70.59

ip = "113.57.97.127"

url = url + ip

headers = ("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.6735.400 QQBrowser/10.2.2614.400")

opener = urllib.request.build_opener()

opener.addheaders = [headers]

html = opener.open(url).read().decode("utf-8")

beginIndex = html.find("IP详细地址：<font color=#FF0000>")

lenStr = len("IP详细地址：<font color=#FF0000>")

endIndex = html.find('</font></font><br/></div></div><div class="ad">')

position = html[beginIndex+lenStr:endIndex]

print(position)
