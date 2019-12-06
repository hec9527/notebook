import pygame
import sys
from pygame.locals import *

pygame.init()

size = w, h = (800, 600)
screen = pygame.display.set_mode(size, RESIZABLE)
pygame.display.set_caption("修改图像的透明度")

imBg = pygame.image.load("./resource/images/草地.jpg")
imBgRect = imBg.get_rect()
imTu = pygame.image.load("./resource/images/乌龟.jpg")
imTuRect = imTu.get_rect()

timer = pygame.time.Clock()

def getAlpha(target, source, location, opacity):
    x = location[0]
    y = location[1]
    temp = pygame.Surface((source.get_width(), source.get_height())).convert()
    temp.blit(target, (-x, -y))
    temp.blit(source, (0, 0))
    target.blit(temp, location)

getAlpha(screen, imTu, imBgRect, 200)


while 1:
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            sys.exit()
    pygame.display.update()      




''' 
    并没有实现的一个案例
        原来的实现思路
        1.创建一个不带aplha通道的小乌龟
        2.将小乌龟所在位置的背景覆盖上去
        3.此刻得到的是跟小乌龟一样尺寸大小，上边绘制着背景图像的surface对象
        4.将带aplha通道的小乌龟覆盖上去
        5.由于temp是不带aplha通道的surface对象，此时使用set_aplha()方法设置整个图像的透明度
        6.最后将设置好透明度的图像贴到指定的位置就OK了

''' 
