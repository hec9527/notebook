import pygame,sys
from pygame.locals import *


pygame.init()
size = w, h = (800, 600)
screen = pygame.display.set_mode(size)
pygame.display.set_caption("绘制多边形")

points=[(200,75),(300,25),(400,75),(450,25),(450,125),(400,75),(300,125)]

while 1:
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            sys.exit()
    pygame.draw.polygon(screen, (0,255,0), points, 0)
    pygame.display.flip()
import cv2

