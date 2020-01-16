import os
import requests
import json
import threading
import time
from sys import exit
import re


class Spider360():

    def __init__(self):
        self.root = os.getcwd()
        self.image_path = self.root + "/images/"
        self.header = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.5603.400 QQBrowser/10.1.1775.400",
        }
        self.header1 = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Host": "p19.qhimg.com",
            "Pragma": "no-cache",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36"
        }
        self.api1 = 'http://cdn.apc.360.cn/index.php?c=WallPaper&a=getAllCategoriesV2&from=360chrome'
        # cid , start , count
        self.api2 = 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&from=360chrome'
        if not os.path.isdir(self.image_path):
            os.makedirs(self.image_path)
        self.data = {
            "get": 0,   # 总共获取到多少张壁纸
            "download": 0,  # 总共下载到多少张壁纸
        }
        self.task_get = None
        self.task_download = None
        self.categories = []
        self.downLoad_lis = []
        # 下面的参数 下载线程数   默认为5  允许值  1-10
        # 因为主线程也会参与下载所以  实际下载线程数量为  以下参数+1
        self.task_num = 5

    def start(self):
        # 获取到360壁纸的所有壁纸分类
        self.getAllCategories()
        threading.Thread(target=self.getInfo).start()
        if self.task_num < 1:
            self.task_num = 1
        elif self.task_num > 10:
            self.task_num = 10
        for i in range(self.task_num):
            print(f"正在开启线程{i}...")
            threading.Thread(target=self.download).start()
        self.download()

    def getInfo(self):
        # 遍历每一个壁纸的分类，并且将他们保存在本地
        for item in self.categories:
            self.getImageInfo(item)

    def getResponse(self, url, repeate=0):
        try:
            response = requests.get(url, headers=self.header1)
        except Exception:
            print(f"获取图片超时")
            repeate += 1
            return self.getResponse(url, repeate)
        return response

    def download(self):
        time.sleep(2)
        while 1:
            if len(self.downLoad_lis) == 0:
                print(f"暂无下载图片:{self.downLoad_lis}")
                time.sleep(1)
            else:
                info = self.downLoad_lis.pop(0)
                print(f"正在下载>> {info[3]} <<分类，第{self.data['download']}张图片", end='\r')
                "id,url,ReSolution,type"
                url = info[1]
                # response = requests.get(url, headers=self.header1)
                response = self.getResponse(url)
                if response.status_code != 200:
                    self.downLoad_lis.append(info)
                    print(f"{info}下载失败", end='\n')
                    continue
                else:
                    # filePath = self.image_path + str(info[3]) + '/' + str(info[2]) + "/"
                    filePath = f"{self.image_path}{info[3]}/{info[2]}/"
                    fileType = str(info[1]).split(".")[-1]
                    fileName = f"{info[0]}.{fileType}"
                    if not os.path.isdir(filePath):
                        filePath = self.checkPath(filePath)
                        os.makedirs(filePath)
                    with open(filePath + fileName, 'wb') as f:
                        f.write(response.content)
                    self.data['download'] += 1
                    print(f">> {info[3]} <<分类，第{self.data['download']}张图片下载完成   --OK")
                    if self.data['download'] % 10 == 0:
                        print(f"\n当前找到{self.data['get']}张图片，已下载{self.data['download']}张\n")

    def checkPath(self, path):
        filePath = path
        for ch in ':*?"<>':
            if ch in filePath:
                filePath.replace(ch, "x")
        return filePath

    def getAllCategories(self):
        "获取360壁纸的所有分类，并且保存在数组里面"
        response = requests.get(self.api1, headers=self.header)
        if response.status_code != 200:
            print(f"获取图片分类，网络链接失败，状态码{response.status_code}")
            input()
            exit()
        html = json.loads(response.text)['data']
        # print(html, response.status_code)
        for data in html:
            d = {
                "id": data["id"],
                "name": data["name"]
            }
            self.categories.append(d)

    def getImageInfo(self, item):
        start = 0
        print(f"正在获取>>>{item['name']}<<<分类图片信息", end='\n')
        while 1:
            url = f"{self.api2}&cid={item['id']}&start={start}&count=30"
            response = requests.get(url, headers=self.header)
            if response.status_code != 200:
                print(f"获取图片信息，网络链接失败，状态码{response.status_code}", end='\n')
                input()
                exit()
            data = json.loads(response.text)['data']
            if len(data) == 0:
                break
            else:
                start += len(data)
                self.data['get'] += len(data)
                for info in data:
                    imId = info["id"]
                    imRes = re.findall(r"\d+", info["resolution"])
                    imName = str(info["url"]).split("/")[-1]
                    imURL = f"http://p19.qhimg.com/bdm/{imRes[0]}_{imRes[1]}_100/{imName}"
                    self.downLoad_lis.append((imId, imURL, info["resolution"], item['name']))
                    self.data['get'] += 1
            time.sleep(5)

    def __del__(self):
        print(f"总共获取 >>{self.data['get']}<<  张图片信息")
        print(f"总共下载 >>{self.data['download']}<< 张图片")
        input()


if __name__ == "__main__":
    tt = time.time()
    try:
        spider = Spider360()
        spider.start()
    except Exception as e:
        print(e)
    finally:
        print(f"总共耗时：{time.time()-tt}")
        input(">Please press any key to continue...")
