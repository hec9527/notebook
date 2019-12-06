import pygame,sys
from pygame.locals import *

#初始化
pygame.init()

#设置分辨路
screen=pygame.display.set_mode((800,600),0,32)

pygame.display.set_caption("按F切换全屏,ESC退出全屏")

while True:
    for e in pygame.event.get():
        if e.type==QUIT:
            sys.exit()
        if e.type == KEYDOWN and e.key == K_f:
            screen = pygame.display.set_mode((1920, 1080), FULLSCREEN, 32)
        elif e.type == KEYDOWN and e.key == K_ESCAPE:
            screen = pygame.display.set_mode((800, 600), 0, 32)
        pygame.display.update()
