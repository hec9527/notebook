import urllib.request
import re, datetime, os, time

def getTimeCurrent():
    ''' 获取当前的时间作为文件名字的一部分 '''
    t = datetime.datetime.now()
    return str(t).replace('-', '').replace(' ','').replace(':','').replace('.','')[2:-4]

def getImageURL(txt):
    ''' 调用360壁纸图片的API 获取加载的图片信息 ''' 
    exp = r'"qhimg_url":"(.*?)"'
    urls = re.findall(exp, txt, re.S)
    return urls

def saveImage(lis,file_path):
    ''' 从地址中获取并且保存图片 '''
    leng = len(lis)
    for i in range(leng):
        print("正在下载第" + str(i + 1) + "/" + str(leng) + "张图片...", end="\r")
        url = lis[i].replace(r"\/", '/')
        urllib.request.urlretrieve(url, file_path + getTimeCurrent() + "." + url.split('.')[-1])
    return i + 1

def main(imType,file_path):
    flag = 0  # 出现错误的次数   连续错误则结束循环
    sn = 0
    sumImage = 0
    while True:
        url = 'http://image.so.com/zj?ch=' + imType + '&sn=' + str(sn) + '&listtype=new&temp=1'
        print("正在获取第" + str(sn // 30 + 1) + "页的图片地址...", end="\n")
        txt = urllib.request.urlopen(url).read().decode()
        lis = getImageURL(txt)
        sn += 30
        if len(lis) <= 0:
            flag += 1
            print("Error:在获取第" + str(sn // 30 + 1) + "页图片地址的时候出现错误!")
            if flag >= 5:
                print("连续5次获取图片错误，本次爬取任务结束!\n")
                break
            else:
                continue
        flag = 0  # 连续错误才会退出，没有错误则继续
        sumImage += saveImage(lis, file_path)
    return sumImage

if __name__ == "__main__":
    begin_time=time.time()
    imtype = ['beauty', 'wallpaper', 'funny', 'video', 'go', 'art', 'car', 'photography', 'food', 'home', 'pet', 'design']
    sumImage = 0
    for t in imtype:
        file_path = r"./resource/" + str(t) + "/"
        if not os.path.isdir(file_path):
            os.makedirs(file_path)
        sumImage += main(t, file_path)
    end_time = time.time()
    print("".center(50, "*"))
    print("爬取任务结束".center(46))
    strt = "耗时:" + str("{:.3f}".format(end_time - begin_time)) + "秒"
    print(strt.center(46))
    strt = "总共获取:" + str(sumImage) + "张图片"
    print(strt.center(46))
    print("".center(50, "*"))
    input("\nPlease press Enter to close...")


"""
    copy-right:hc
    @time:2018-11-24
    @lastCheck By: hc
"""