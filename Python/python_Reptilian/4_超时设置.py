import urllib.request

url = "https://www.cnblogs.com/283383765pw/articles/9884217.html"

for i in range(100):
    try:
        req = urllib.request.urlopen(url, timeout=1)
        data = req.read()
        print(len(data))
    except Exception as e:
        print("Time out------>",str(e))
