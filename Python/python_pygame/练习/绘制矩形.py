import pygame, sys
from pygame.locals import *

pygame.init()
size = w, h = (800, 600)
screen = pygame.display.set_mode(size, RESIZABLE)
pygame.display.set_caption("绘制矩形")

while 1:
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            sys.exit()
    screen.fill((255, 255, 255))
    #  rect( 绘制的surface ,边框颜色 , 矩形的起始位置宽高 ,边框的宽度   0为填充整个矩形  )
    pygame.draw.rect(screen, (0, 0, 0), (50, 50, 150, 50), 0)
    pygame.draw.rect(screen, (0, 0, 0), (250, 50, 150, 50), 1)
    pygame.draw.rect(screen, (0, 0, 0), (450, 50, 150, 50), 10)
    pygame.draw.rect(screen, (255, 0, 0), (50, 250, 150, 50), 0)
    pygame.draw.rect(screen, (0, 255, 0), (250, 250, 150, 50), 0)
    pygame.draw.rect(screen, (0, 0, 255), (450, 250, 150, 50), 0)
    pygame.display.flip()
