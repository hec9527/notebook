import pygame
from pygame.locals import *
from os import getcwd
from sys import exit
from random import randint


class SpriteBg(pygame.sprite.Sprite):  # 背景精灵类
    '''背景精灵类
        背景精灵需要有精灵的图像、速度、x坐标、y坐标'''
    def __init__(self, img_path, flag):  # 初始化背景精灵
        super().__init__()
        self.image = pygame.image.load(img_path).convert_alpha()
        self.rect = self.image.get_rect()
        self.rect.x = 0
        self.rect.y = 0 if flag else -self.rect.h
        self.speed = 1

    def update(self):  # 背景精灵的update()方法
        super().update()
        self.rect.y += self.speed
        if self.rect.y > WIN_SIZE[1]:
            self.rect.y = -self.rect.y


class SpriteHero(pygame.sprite.Sprite):  # 英雄精灵类
    def __init__(self, img_path):
        super().__init__()
        self.image = pygame.image.load(img_path).convert_alpha()
        self.rect = self.image.get_rect()
        self.speed = [0, 0]
        self.camp = "hero"
        self.life = 1
        self.step = 3  # 每次移动的时候英雄移动的距离
        self.rect.x = (WIN_SIZE[0] - self.rect.w) // 2
        self.rect.y = (WIN_SIZE[1] - self.rect.h) // 3 * 2
        self.im_bullet = CWD + "/image/bullet_hero.png"

    def shoot(self):  # 英雄射击
        global CAN_SHOOT
        if CAN_SHOOT:
            bullet1 = SpriteBullet(self.im_bullet, self.rect, False)
            bullet2 = SpriteBullet(self.im_bullet, self.rect, True)
            game.Group_bullet.add(bullet1, bullet2)
            CAN_SHOOT = False

    def check_keyborad(self):  # 检测键盘按键  指挥英雄飞机做出对应的动作
        self.speed = [0, 0]
        for key in KEYS_SET:
            if key == K_w:
                self.speed[1] = -self.step
            if key == K_s:
                self.speed[1] = self.step
            if key == K_a:
                self.speed[0] = -self.step
            if key == K_d:
                self.speed[0] = self.step
            if key == K_j:
                self.shoot()

    def update(self):
        super().update()
        self.check_keyborad()
        self.rect.x += self.speed[0]
        self.rect.y += self.speed[1]
        if self.rect.x < 0:
            self.rect.x = 0
        elif self.rect.x + self.rect.w > WIN_SIZE[0]:
            self.rect.x = WIN_SIZE[0] - self.rect.w
        if self.rect.y < 0:
            self.rect.y = 0
        elif self.rect.y + self.rect.h > WIN_SIZE[1]:
            self.rect.y = WIN_SIZE[1] - self.rect.h


class SpriteEnemy(pygame.sprite.Sprite):  # 敌方精灵类
    def __init__(self, img_path, life=1):

        super().__init__()
        self.image = pygame.image.load(img_path)
        self.rect = self.image.get_rect()
        self.rect.x = randint(0, WIN_SIZE[0] - self.rect.w)
        self.rect.y = randint(-self.rect.h * 2, -self.rect.h)
        self.speed = randint(3, 4)
        self.life = life

    def update(self):
        super().update()
        self.rect.y += self.speed
        if self.rect.y > WIN_SIZE[1]:
            self.kill()


class SpriteBullet(pygame.sprite.Sprite):  # 子弹精灵类
    def __init__(self, im_path, rect, flag):
        super().__init__()
        self.image = pygame.image.load(im_path).convert_alpha()
        self.rect = self.image.get_rect()
        if flag:
            self.rect.x = rect.x + self.rect.w * 2
        else:
            self.rect.x = rect.x + rect.w - self.rect.w * 2
        self.rect.y = rect.y + rect.h // 3
        self.speed = -4

    def update(self):
        super().update()
        self.rect.y += self.speed
        if self.rect.y < -self.rect.h:
            self.kill()


class Game():  # 游戏入口   游戏循环
    def __init__(self):  # 初始化游戏对象设置相关参数
        pygame.init()
        pygame.display.set_caption(GAME_TITLE)
        pygame.time.set_timer(USEREVENT_1, INTERVAL_NEWENEMY)  # 定时器 设定事件新增敌人飞机
        pygame.time.set_timer(USEREVENT_2, INTEVAL_SHOOT)  # 允许射击的间隔事件

        self.screen = pygame.display.set_mode(WIN_SIZE, DOUBLEBUF)
        self.FPS = pygame.time.Clock()
        # 背景精灵组
        self.im_bg = CWD + "/image/bg.png"
        self.bg = SpriteBg(self.im_bg, False)
        self.bg1 = SpriteBg(self.im_bg, True)
        self.Group_bg = pygame.sprite.Group(self.bg, self.bg1)
        # 英雄精灵组
        self.im_hero = CWD + "/image/hero.png"
        self.hero = SpriteHero(self.im_hero)
        self.Group_hero = pygame.sprite.Group(self.hero)
        # 敌人精灵组
        self.im_enemy = [CWD + "/image/enemy.png", CWD + "/image/enemy1.png"]
        self.Group_enemy = pygame.sprite.Group()
        # 子弹精灵组
        self.Group_bullet = pygame.sprite.Group()

    def start(self):  #游戏主循环
        global FRAME_PER_SECOND
        while True:
            self.FPS.tick(FRAME_PER_SECOND)
            self.event_handler()
            self.sprite_update()
            self.sprite_collision()
            self.show_msg()

    def event_handler(self):  # 事件处理
        for e in pygame.event.get():
            if e.type == QUIT:
                self.__del__()
            if e.type == KEYDOWN:
                KEYS_SET.add(e.key)
            if e.type == KEYUP:
                if e.key in KEYS_SET:
                    KEYS_SET.remove(e.key)
            if e.type == USEREVENT_1:
                self.creatEnemy()
            if e.type == USEREVENT_2:
                global CAN_SHOOT
                CAN_SHOOT = True

    def sprite_update(self):  #  精灵更新
        self.Group_bg.update()
        self.Group_bg.draw(self.screen)
        self.Group_hero.update()
        self.Group_hero.draw(self.screen)
        self.Group_enemy.update()
        self.Group_enemy.draw(self.screen)
        self.Group_bullet.update()
        self.Group_bullet.draw(self.screen)
        pygame.display.update()

    def sprite_collision(self):  # 碰撞检测
        # 敌人和子弹之间的碰撞检测
        pygame.sprite.groupcollide(self.Group_bullet, self.Group_enemy, True,
                                   True)
        # 敌人和英雄之间的碰撞检测
        # pygame.sprite.groupcollide(self.Group_hero, self.Group_enemy, True, True)
        lis = pygame.sprite.spritecollide(self.hero, self.Group_enemy, True)
        if len(lis) > 0:
            print("游戏结束")
            self.__del__()

    def show_msg(self):  # 显示消息
        # 暂无
        pass

    def creatEnemy(self):  # 新增敌人飞机
        for e in range(randint(0, 2)):
            e_boss = True if randint(0, 30) < 25 else False  # 是否出现巨大的敌机
            im_path = self.im_enemy[0] if e_boss else self.im_enemy[1]
            life = 1 if e_boss else 2
            enemy = SpriteEnemy(im_path, life)
            self.Group_enemy.add(enemy)

    def __del__(self):  # 结束游戏
        pygame.quit()
        exit()


#  游戏常量  全局可用
WIN_SIZE = 480, 700
# CWD = getcwd()
CWD = getcwd() + "/.."
FRAME_PER_SECOND = 120
KEYS_SET = set()
GAME_TITLE = "飞机大战"
USEREVENT_1 = pygame.USEREVENT + 1
USEREVENT_2 = pygame.USEREVENT + 2
INTEVAL_SHOOT = 300
INTERVAL_NEWENEMY = 500
CAN_SHOOT = True

if __name__ == "__main__":
    game = Game()
    game.start()

input()
'''
pygame.key.get_presswd()
    获取所有按下的键盘按键信息
'''
