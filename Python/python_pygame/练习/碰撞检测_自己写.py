import pygame, sys, random, math
from pygame.locals import *
'''
    最开始想要做游戏来着，最后发现能力还不够就只能做一个碰撞检测的demo了
    暂未完成
    2018-11-11  00:07
'''


class Ball(pygame.sprite.Sprite):
    def __init__(self, imgs, postion, speed, w, h):
        pygame.sprite.Sprite.__init__(self)  # 初始化动画精灵
        self.imList = imgs
        self.imIndex = 0  # 当前使用的图片的索引
        self.image = pygame.image.load(
            self.imList[self.imIndex]).convert_alpha()
        self.rect = self.image.get_rect()
        self.rect.left, self.rect.top = postion
        self.speed = speed
        self.fatherShape = w, h

    def move(self):
        self.rect = self.rect.move(self.speed)
        # print(self.rect)
        # print(self.rect.left, self.rect.top, self.rect.right, self.rect.bottom)
        # self.rect   [x,y,w,h]
        if self.rect.left > self.fatherShape[0] - self.rect.width:
            self.speed[
                0] = -self.speed[0] if self.speed[0] > 0 else self.speed[0]
        if self.rect.left < 0:
            self.speed[
                0] = -self.speed[0] if self.speed[0] < 0 else self.speed[0]
        if self.rect.top > self.fatherShape[1] - self.rect.height:
            self.speed[
                1] = -self.speed[1] if self.speed[1] > 0 else self.speed[1]
        if self.rect.top < 0:
            self.speed[
                1] = -self.speed[1] if self.speed[1] < 0 else self.speed[1]


def collid_ball(item, target):
    col_balls = []
    for each in target:
        distance = math.sqrt(math.pow((item.rect.center[0] - each.rect.center[0]), 2) \
                        +math.pow((item.rect.center[1]-each.rect.center[1]),2))
        if distance <= (item.rect.width + each.rect.width) / 2:
            col_balls.append(each)
    return col_balls


def main():
    pygame.init()
    imBallGreen = "./resource/images/ball_green.png"
    imBallGray = "./resource/images/ball_gray.png"
    imBg = "./resource/images/草地.png"
    run = True
    bg_size = w, h = 1024, 700
    screen = pygame.display.set_mode(bg_size)
    pygame.display.set_caption("Play ball")
    background = pygame.image.load(imBg).convert_alpha()
    ballLst = []

    # 创建5个小球
    for i in range(5):
        position = random.randint(50, w - 100), random.randint(50, h - 100)
        speed = [random.randint(-5, 5), random.randint(-5, 5)]
        ball = Ball((imBallGreen, imBallGray), position, speed, w, h)
        ballLst.append(ball)
    # 设置帧数
    clock = pygame.time.Clock()
    # 游戏主循环
    while run:
        for e in pygame.event.get():
            if e.type == pygame.QUIT:
                sys.exit()
        screen.blit(background, (0, 0))  # 绘制背景图像
        # 遍历每一个小球  移动并且检测他们的状态
        for one in ballLst:
            one.move()
            screen.blit(one.image, one.rect)
        # 小球的碰撞 检测
        for i in range(len(ballLst)):
            print(len(ballLst), i)
            item = ballLst.pop(i)
            if collid_ball(item, ballLst):
                item.speed[0] = -item.speed[0]
                item.speed[1] = -item.speed[1]
                item.imIndex = 1 if item.imIndex == 0 else 0
                item.image = pygame.image.load(
                    item.imList[item.imIndex]).convert_alpha()
                l, r = item.rect.left, item.rect.right
                item.rect = item.image.get_rect()
                item.rect.left, item.rect.right = l, r

                # if item.image == pygame.image.load(item.imList[0]).convert_alpha():
                #     item.image = pygame.image.load(item.imList[1]).convert_alpha()
                # else:
                #     item.image = pygame.image.load(item.imList[0]).convert_alpha()
                # item.rect=item.image.get_rect()
            ballLst.insert(i, item)
        pygame.display.flip()
        clock.tick(30)


if __name__ == "__main__":
    main()
