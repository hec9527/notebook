from PIL import Image, ImageFont, ImageDraw
import sys
import cv2
import numpy
import os

class CharsGray():

    def __init__(self):
        # 每个文字的大小为 10*10 的像素
        self.font_size = 100
        self.strs = "abcdefghijklmnopqrstuvwwwwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()-=_+1234567890,./\\|?"
        self.dic = {}
        self.strs = "".join(set(self.strs))
        for c in '/\\|"*?<>:{}\' ':
            self.strs = self.strs.replace(c, '')
        print(self.strs, len(self.strs))

    def newImage(self, char):
        img = numpy.zeros((100, 100, 3), dtype=numpy.uint8)
        cv2.putText(img, char, (50, 50), cv2.FONT_HERSHEY_SCRIPT_COMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        piexlSum = 0
        for col in range(100):
            for row in range(100):
                piexlSum += img[col][row]
        self.dic[char] = piexlSum
    

    def sortDict(self):
        sorted_lis = self.radixSort(list(self.dic.values()))
        print(sorted_lis)
        strs = ''
        for num in sorted_lis:
            for key in self.dic.keys():
                if self.dic[key] == num:
                    strs += str(key)
                    break
        print(strs, len(strs))


    def radixSort(self, arr, numLen=0, sortTime=0):
        '''从小到大排序列表'''
        if numLen==0:
            numLen = len(str(max(arr)))
        dic = { x: [] for x in range(10)}
        # 排序次数和数组中最长的数字长度相等
        if numLen == sortTime:
            return arr
        else:  # 排序
            for num in arr:
                residue = (num // pow(10, sortTime)) % 10
                if 0 < residue < 1:
                    residue = 0
                dic[residue].append(num)
        lis = []
        for items in dic.items():
            lis.extend(items[1])
        sortTime += 1
        return self.radixSort(lis, numLen, sortTime)


    def main(self):
        # 先生成图像并且保存在文件系统中
        for char in self.strs:
            self.newImage(char)
        # print(self.dic)
        self.sortDict()


gray = CharsGray()
gray.main()

