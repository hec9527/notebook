import pygame
import sys
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
    pygame.draw.line(screen, (255, 0, 0), (30, 400), (600, 200), 3)
    pygame.draw.aaline(screen, (255, 0, 0), (30, 450), (600, 250), 3)
    pygame.draw.line(screen, (255, 0, 0), (50, 50), (50, 50), 2)
    pygame.draw.lines(screen, (0, 255, 255), True, [(50, 50), (450, 100),
                                                    (400, 500)], 1)
    pygame.draw.aalines(screen, (0, 255, 255), True, [(50, 90), (450, 140),
                                                      (400, 540)], 1)
    pygame.display.flip()
