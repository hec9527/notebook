import pygame, sys
from pygame.locals import *

pygame.init()
size = w, h = (800, 600)
screen = pygame.display.set_mode(size)
bg = (255, 255, 255)

pos = w // 2, h // 2
moving = False
''' 
    获取鼠标位置信息 ，移动绘制的位置  
'''

while 1:
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            sys.exit()
        if e.type == pygame.MOUSEBUTTONDOWN:
            if e.button == 1:
                moving = True
        if e.type == pygame.MOUSEBUTTONUP:
            if e.button == 1:
                moving = False
    if moving:
        pos = pygame.mouse.get_pos()
    screen.fill(bg)
    pygame.draw.circle(screen, (255, 0, 0), pos, 25, 1)
    pygame.draw.circle(screen, (0, 255, 0), pos, 50, 1)
    pygame.draw.circle(screen, (0, 0, 255), pos, 75, 1)
    pygame.display.flip()
