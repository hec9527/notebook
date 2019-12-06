import re,urllib.request

def getAndSaveImage(html,url):
    exp = r'<img.*?src="./(.*?)"'
    res = re.findall(exp, html, re.M)
    for i in range(len(res)):
        fName = "./resource/" + res[i].split("/")[-1]
        f = open(fName, 'wb')
        data = urllib.request.urlopen(url + res[i]).read()
        f.write(data)
        f.close()

def getAndSaveMsg(html, url):
    exp = r'<div class="essay[0-9]{0,1}".*?</div>'
    string = re.findall(exp, html, re.S)
    for strs in string:
        exp = r'<h1 style=.*?"><a href=".*?">(.*?)</a></h1>'
        res = re.findall(exp, strs)[0]
        writeToFile(res,"Title")
        exp = r'<p style=".*?">(.*?)</p>'
        res = re.findall(exp, strs,re.S)[0]
        writeToFile(res, "Body")
        exp = r'<a href="(.*?)">'
        res = re.findall(exp, strs)[0]
        writeToFile(res, "Link")
        writeToFile("\n\n")

def writeToFile(strs, head=""):
    string = head.center(50,"=") + "\n" + strs + "\n"
    f = open("./resource/essay.txt", "at")
    f.write(string)
    f.close()

if __name__ == "__main__":
    url = "http://www.eastmountyxz.com/"
    res=urllib.request.urlopen(url)
    html=res.read().decode("utf-8")
    getAndSaveImage(html,url)
    getAndSaveMsg(html,url)
