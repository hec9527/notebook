import pygame, sys
from pygame.locals import *

# 初始化pygame
pygame.init()
# 设置窗口大小
screen = pygame.display.set_mode((800, 600))
# 设置窗口标题
pygame.display.set_caption("按↑↓缩放，←→旋转图像")
# 加载所用到图像  返回surface对象
img = pygame.image.load("./resource/images/乌龟.png")
# 设置乌龟默认的缩放级别
ratio = 1.0
# 设置乌龟的位置
pos = (150, 100)
# 设置需要显示在窗口上的图像
imgShow = img
# 获取显示图像的矩形
imgRect = img.get_rect()
# 设置乌龟的旋转角度
angle = 0
# 存放按下的按键信息
keys = []
# 设置帧数
timer = pygame.time.Clock()

while 1:
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            sys.exit()
        if e.type == KEYDOWN:  # 只能使用KEYDOWN  KEYUP 添加按键信息到列表然后遍历列表获取按键信息
            keys.append(e.key)
        if e.type == KEYUP:
            keys.remove(e.key)
    if K_LEFT in keys:
        angle -= 1
    if K_RIGHT in keys:
        angle += 1
    if K_DOWN in keys and ratio < 2.5:
        ratio += 0.1
    if K_UP in keys and ratio > 0.3:
        ratio -= 0.1

    imgShow = pygame.transform.rotate(img, angle)
    imgRect = imgShow.get_rect()
    imgShow = pygame.transform.smoothscale(
        imgShow, (int(imgRect.width * ratio), int(imgRect.height * ratio)))
    # smoothscale 函数   二个参数 第一个surface 第二个缩放后的宽高

    imgRect.left, imgRect.top = pos[0], pos[1]  # 设置矩形方块的位置
    screen.fill((255, 255, 255))
    screen.blit(
        imgShow,
        imgRect)  # 两个参数  第一个  需要绘制的图像  surface  第二个 绘制到的矩形方块  pygamge.rect
    # 将surface 绘制到 rect
    pygame.display.flip()  # 更新游戏信息
    timer.tick(30)  #　设置游戏帧数
