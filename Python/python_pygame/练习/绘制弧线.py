import pygame
import sys
import math
from pygame.locals import *

pygame.init()
size = w, h = (800, 600)
screen = pygame.display.set_mode(size)
bg = (255, 255, 255)

while 1:
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            sys.exit()
    screen.fill(bg)
    pygame.draw.arc(screen, (255, 0, 0), (70, 70, 200, 200),0,math.pi/2, 1)
    pygame.draw.arc(screen, (0, 255, 0), (50, 50, 50, 50), math.pi, math.pi * 2,1)
    pygame.display.flip()
