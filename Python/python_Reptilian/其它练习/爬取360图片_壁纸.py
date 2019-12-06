import urllib.request
import re,datetime,os

def getTimeCurrent():
    ''' 获取当前的事件作为文件名字的一部分 '''
    t = datetime.datetime.now()
    return str(t).replace('-', '').replace(' ','').replace(':','').replace('.','')[2:-4]

def getImageURL(txt):
    ''' 调用360壁纸图片的API 获取加载的图片信息 ''' 
    exp = r'"qhimg_url":"(.*?)"'
    urls = re.findall(exp, txt, re.S)
    return urls

def saveImage(lis):
    ''' 从地址中获取并且保存图片 '''
    leng = len(lis)
    for i in range(leng):
        print("正在下载第" + str(i + 1) + "/" + str(leng) + "图片...", end="\r")
        url = lis[i].replace(r"\/", '/')
        urllib.request.urlretrieve(url, "./resource/" + getTimeCurrent() + "." + url.split('.')[-1])

def main(imType):
    flag = 0  # 出现错误的次数   连续错误则结束循环
    sn = 0
    while True:
        url = 'http://image.so.com/zj?ch=' + imType + '&sn=' + str(sn) + '&listtype=new&temp=1'
        print("正在获取第" + str(sn // 30 + 1) + "页的图片地址...", end="\n")
        txt = urllib.request.urlopen(url).read().decode()
        lis = getImageURL(txt)
        sn += 30
        if len(lis) <= 0:
            flag += 1
            print("\nError:在获取第", sn % 30 + 1, "页图片地址的时候出现错误！\n")
            if flag >= 5:
                break
            else:
                continue
        flag = 0  # 连续错误才会退出，没有错误则继续
        saveImage(lis)

if __name__ == "__main__":
    if not os.path.isdir("./resource/"):
        os.mkdir('./resource/')
    # 传递需要爬取的图片的类型
    main('wallpaper')
    print("爬取任务结束！")

"""
    copy-right:hc
    @time:2018-11-24
    @lastCheck By: hc
"""