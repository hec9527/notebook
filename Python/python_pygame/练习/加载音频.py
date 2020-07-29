import pygame, sys
from pygame.locals import *

pygame.init()
size = w, h = 1024, 800
screen = pygame.display.set_mode(size)
pygame.display.set_caption("加载音频")
text = pygame.font.SysFont("SimHei", 50)

mus1 = pygame.mixer.Sound("./resource/music/attack.wav")
# mus1.set_volume(0.2)
# print(mus1.get_volume())   # 1.0

mus2 = pygame.mixer.Sound("./resource/music/attackOver.wav")
# mus2.set_volume(0.2)

mus3 = pygame.mixer.Sound("./resource/music/pause.wav")
# mus3.set_volume(0.2)

pygame.mixer.music.load("./resource/music/start.ogg")
pygame.mixer.music.set_volume(0.2)
pygame.mixer.music.play()

while True:
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            sys.exit()

        if e.type == KEYDOWN:
            if e.key == K_q:
                mus1.stop()
                mus1.play()
            if e.key == K_w:
                mus2.stop()
                mus2.play()
            if e.key == K_e:
                mus3.stop()
                mus3.play()
            if e.key == K_b:
                try:
                    pygame.mixer.music.play()
                except:
                    pygame.mixer.music.unpasue()

    screen.blit(text.render("Q开启音效1，W开启音效2,E开启音效3", True, (255, 255, 255)),
                (100, 300))
    screen.blit(text.render("B关闭背景音效", True, (255, 255, 255)), (100, 400))
    pygame.display.flip()
