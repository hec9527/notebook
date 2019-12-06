import pygame, sys, random, math
from pygame.locals import *

# 小球类
class Ball(pygame.sprite.Sprite):
    def __init__(self, img, postion, speed):
        pygame.sprite.Sprite.__init__(self)  # 初始化动画精灵
        self.image = pygame.image.load(img).convert_alpha()
        self.rect = self.image.get_rect()
        self.rect.left, self.rect.top = postion
        self.speed = speed

    def move(self):
        self.rect = self.rect.move(self.speed)
        if self.rect.left > self.fatherShape[0] - self.rect.width:
            self.speed[0] = - \
                self.speed[0] if self.speed[0] > 0 else self.speed[0]
        if self.rect.left < 0:
            self.speed[0] = - \
                self.speed[0] if self.speed[0] < 0 else self.speed[0]
        if self.rect.top > self.fatherShape[1] - self.rect.height:
            self.speed[1] = - \
                self.speed[1] if self.speed[1] > 0 else self.speed[1]
        if self.rect.top < 0:
            self.speed[1] = - \
                self.speed[1] if self.speed[1] < 0 else self.speed[1]

def main():
    pygame.init()
    imBall = "./resource/images/ball_green.png"
    imBg = "./resource/images/草地.png"
    bg_size = w, h = 1024, 700
    screen = pygame.display.set_mode(bg_size)
    pygame.display.set_caption("碰撞检测")
    background = pygame.image.load(imBg).convert_alpha()
    ballLst = []

    # 创建5个小球
    for i in range(5):
        position = random.randint(50, w - 100), random.randint(50, h - 100)
        speed = [random.randint(-5, 5), random.randint(-5, 5)]
        ball = Ball(imBall, position, speed)
        ballLst.append(ball)
    # 设置帧数
    clock = pygame.time.Clock()
    # 游戏主循环
    while 1:
        for e in pygame.event.get():
            if e.type == pygame.QUIT:
                sys.exit()
        screen.blit(background, (0, 0))  # 绘制背景图像
        # 遍历每一个小球  移动并且检测他们的状态
        for one in ballLst:
            one.move()  
            screen.blit(one.image, one.rect)   # 移动小球之后绘制到屏幕上   
        pygame.display.flip()
        clock.tick(30)


if __name__ == "__main__":
    main()
