import pygame, sys, time
from pygame.locals import *
pygame.init()

screen = pygame.display.set_mode((800, 600), 0, 32)
pygame.display.set_caption("字体")
text = pygame.font.SysFont("微软雅黑", 40)
img = pygame.image.load("./resource/images/草地.png").convert()

while True:
    for e in pygame.event.get():
        if e.type == QUIT:
            sys.exit()
    current_time = time.ctime()
    # time=time.strftime("%Y-%m-%d-%H-%M-%S",time.localtime(time.time()))
    text_surface = text.render(current_time, True, (255, 0, 0))
    screen.blit(img, (0, 0))  # 参数1  surface   参数2   rect
    screen.blit(text_surface, (260, 250))
    pygame.display.update()
