import pygame
from pygame.locals import *
from os import getcwd
from sys import exit


class SpriteEnemy(pygame.sprite.Sprite):
    def __init__(self, image_flag, speed=1):
        super().__init__()
        if image_flag == 1:
            img_path = CWD + "/image/enemy.png"
        elif image_flag == 2:
            img_path = CWD + "/image/enemy1.png"
        self.image_down = CWD + "/image/enemy_down"
        self.image = pygame.image.load(img_path).convert_alpha()
        self.rect = self.image.get_rect()
        self.speed = speed

    def update(self):
        self.rect.y += self.speed


class SpriteHero(pygame.sprite.Sprite):
    def __init__(self, screen):
        super().__init__()
        self.image = pygame.image.load(CWD + "/image/hero.png").convert_alpha()
        self.rect = self.image.get_rect()
        self.rect.x = (WINDOW_SIZE[0] - self.rect.w) // 2
        self.rect.y = (WINDOW_SIZE[1] - self.rect.h) // 3 * 2
        self.speed = [0, 0]
        self.sp = 5
        # self.bullet_num = 10
        # self.bullet_sprite_group = pygame.sprite.Sprite()
        # self.screen = screen

    def move(self):
        for key in Game.keyLis:  #  w  s  a   d
            # 上下
            if key == K_w:
                self.speed[1] = -self.sp
            elif key == K_s:
                self.speed[1] = self.sp
            # 左右
            if key == K_a:
                self.speed[0] = -self.sp
            elif key == K_d:
                self.speed[0] = self.sp
            # # 射击
            # if key == K_j or key == K_k:
            #     self.shoot()

    # def shoot(self):
    #     # 英雄飞机射击
    #     if len(self.bullet_sprite_group) < self.bullet_num:
    #         self.bullet_sprite_group.add(Bullet("hero", self.rect, 1), Bullet("hero", self.rect, 2))
    #         print("shoot")

    def update(self, *args):
        super().update()
        self.move()
        self.rect.x += self.speed[0]
        self.rect.y += self.speed[1]
        if self.rect.x >= WINDOW_SIZE[0] - self.rect.w:
            self.rect.x = WINDOW_SIZE[0] - self.rect.w
        elif self.rect.x < 0:
            self.rect.x = 0
        if self.rect.y >= WINDOW_SIZE[1] - self.rect.h:
            self.rect.y = WINDOW_SIZE[1] - self.rect.h
        elif self.rect.y < 0:
            self.rect.y = 0
        self.speed = [0, 0]
        # if len(self.bullet_sprite_group) > 0:
        # self.bullet_sprite_group.update()
        # self.bullet_sprite_group.draw(self.screen)
        # print("bullet_move")
        # print(self.bullet_sprite_group)


# class Bullet(pygame.sprite.Sprite):
#     def __init__(self, camp, rect, t=0):
#         super().__init__()
#         self.type = "bullet"
#         self.camp = camp
#         self.image = pygame.image.load(CWD + "/image/enemy.png").convert_alpha()
#         self.rect = self.image.get_rect()

#         if self.camp == "hero":
#             self.speed = -3
#             if t == 1:
#                 self.rect.x = rect.x - 10
#             elif t == 2:
#                 self.rect.x = rect.x + 10
#             else:
#                 self.rect.x = rect.w // 2 + rect.x
#             self.rect.y = rect.y + 10
#         else:
#             self.speed = 3
#             self.rect.x = rect.x + rect.w // 2
#             self.rect.y = rect.y + rect.h

#     def update(self):
#         super().update()
#         self.rect.y += self.speed
#         if self.rect.y < -self.rect.h or self.rect.y > WINDOW_SIZE[1]:
#             self.kill()


class SpriteBackground(pygame.sprite.Sprite):
    def __init__(self, flag=False):
        super().__init__()
        self.image = pygame.image.load(CWD + "/image/bg.png").convert_alpha()
        self.rect = self.image.get_rect()
        if flag:
            self.rect.y = -WINDOW_SIZE[1]

    def update(self):
        super().update()
        self.rect.y += 1
        if self.rect.y >= WINDOW_SIZE[1]:
            self.rect.y = -WINDOW_SIZE[1]


class Game():
    # 游戏主类
    keyLis = []

    def __init__(self):
        # 创建游戏对象 设置相关参数
        pygame.init()
        pygame.display.set_caption("飞机大战")
        self.screen = pygame.display.set_mode(WINDOW_SIZE)
        self.FPS = pygame.time.Clock()
        self.tick = pygame.time.Clock()

        # 背景精灵组
        bg1 = SpriteBackground()
        bg2 = SpriteBackground(True)
        self.sprite_group_bg = pygame.sprite.Group(bg1, bg2)
        # 英雄精灵组
        self.hero = SpriteHero(self.screen)
        self.sprite_group_hero = pygame.sprite.Group(self.hero)
        # 英雄子弹精灵组

        # 敌人精灵组

        # 敌人子弹精灵组

    def start(self):
        while 1:
            # 游戏主循环
            self.tick.tick(144)
            self.event_handler()
            self.sprite_update()
            self.sprite_collision()

    def event_handler(self):
        # 事件处理
        for event in pygame.event.get():
            if event.type == pygame.quit:
                self.__del__()
            if event.type == KEYDOWN:
                if event.key in Game.keyLis:
                    break
                else:
                    Game.keyLis.append(event.key)
            if event.type == KEYUP:
                # 去除重复的按键
                Game.keyLis = list(set(Game.keyLis))
                if event.key in Game.keyLis:
                    Game.keyLis.remove(event.key)
                    pass
                # for key in Game.keyLis:
                #     if key == event.key:
                #         Game.keyLis.remove(key)

    def sprite_update(self):
        # 更新显示
        self.screen.fill((0, 0, 0))
        self.sprite_group_bg.update()
        self.sprite_group_bg.draw(self.screen)
        self.sprite_group_hero.update()
        self.sprite_group_hero.draw(self.screen)
        pygame.display.update()

    def sprite_collision(self):
        # 碰撞检测
        pass

    def __del__(self):
        # 结束游戏
        pygame.quit()
        exit()


#  游戏常量  全局可用
WINDOW_SIZE = 480, 700
CWD = getcwd()

if __name__ == "__main__":
    game = Game()
    game.start()
