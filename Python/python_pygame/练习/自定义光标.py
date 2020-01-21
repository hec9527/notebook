import pygame, sys
from pygame.locals import *

pygame.init()
size = w, h = 1024, 800
screen = pygame.display.set_mode(size)
pygame.display.set_caption("修改鼠标指针")

cursor = pygame.image.load("./resource/images/cursor_click.png")
cursor_rect = cursor.get_rect()
show = True
'''
    思路：
        隐藏默认的鼠标 
        加载一张图片，在鼠标的位置绘制，代替原来的鼠标
'''

while True:
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            sys.exit()
        if e.type == KEYDOWN and e.key == K_q:
            show = True if show == False else False
            print(show)
            pygame.mouse.set_visible(show)
    screen.fill((255, 255, 255))  # 绘制背景放在绘制其它图像之前，防止被覆盖
    if not show:
        cursor_rect.left, cursor_rect.top = pygame.mouse.get_pos()
        screen.blit(cursor, cursor_rect)
    pygame.display.flip()
