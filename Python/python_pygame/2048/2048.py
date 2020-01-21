import pygame, sys, random, os
from pygame.locals import *


class Game():
    def __init__(self):
        '''初始化对象，以及相关属性'''
        pygame.init()
        pygame.display.set_caption("2048 by hc")
        self.size = 1600, 880
        self.surface_bg = pygame.display.set_mode(
            self.size)  # surface 背景层  , FULLSCREEN | DOUBLEBUF
        self.tick = pygame.time.Clock()  # 设置游戏时钟
        self.color_bg = (255, 255, 255)  # 背景颜色
        self.color_black = (60, 60, 60)
        self.color_rect = (255, 174, 201)  # 游戏中的框的颜色
        self.font_head = pygame.font.SysFont("SimHei", 50)  # SimHei
        self.font_score = pygame.font.SysFont("SimHei", 28)
        self.font_title = pygame.font.SysFont("SimHei", 28)
        self.font_text = pygame.font.SysFont("SimHei", 14)
        self.font_btn = pygame.font.SysFont("SimHei", 20)
        self.tips = [
            "游戏规则：",
            "▶开始时棋盘内随机出现两个数字，仅可能为2或者4",
            "▶玩家可以选择上下左右四个方向移动棋盘内所有的数字,",
            "   如果棋盘内的数字出现位移或者合并视为有效移动",
            "▶玩家选择方向上存在相同且相邻的数字(空白不算)则合并",
            "   每次移动可同时合并但不能连续合并",
            "▶合并的所有新生成的数字相加即为该步所得分数",
            "▶玩家选择的行/列右空格则位移",
            "▶每次有效移动都会在空白处生成一个随机数字，2或者4",
            "▶棋盘被数字填满，且无法进行有效移动则游戏结束",
            "▶附加规则：棋盘上新生成一个2048,奖励2048分",
            "▶附加规则：棋盘上新生成一个4096,奖励4096分",
        ]
        self.operates = [
            "操作：",
            "W / ↑：将所有的数字向上移动",
            "A / ←：将所有的数字向左移动",
            "S / ↓：将所有的数字向下移动",
            "D / →：将所有的数字向右移动",
            "Back Space:撤销上一步操作",
            "Esc / 点击右上角X： 关闭游戏",
        ]
        self.btnMsg = ["撤销", "重新开始", "更改阶数", "历史最高", "结束游戏", "感谢作者"]
        self.__lines = 4  # 游戏行列数4
        self.__score = 0  # 游戏分数
        self.__step = 0  # 游戏操作的步数
        self.__return = 3  # 剩余撤销次数
        self.__history = 0  # 游戏的历史最高
        self.__time = 0  # 游戏时长度

    def draw_border(self):
        ''' 绘制游戏中的边框 '''
        # 设置游戏的主体框的高度 大小为窗口的80%
        l, t, w, h = 90, 80, 900, 700
        pygame.draw.rect(self.surface_bg, self.color_rect, (l, t, w, h), 3)
        # 设置游戏绘制方块的高度的主体高度的90%
        l, t, w, h = 140, 130, 600, 600
        pygame.draw.rect(self.surface_bg, self.color_rect, (l, t, w, h), 3)
        # # 绘制右侧操作按钮
        l, t, w, h, s = 790, 350, 140, 40, 65
        for i in range(6):
            pygame.draw.rect(self.surface_bg, self.color_rect, (l, t, w, h), 2)
            t = t + s

    def setTips(self):
        ''' 设置游戏中的提示 '''
        self.surface_bg.blit(
            self.font_title.render(self.tips[0], True, self.color_rect),
            (1035, 130))
        t = 150
        for i in range(1, len(self.tips)):
            t += 30
            self.surface_bg.blit(
                self.font_text.render(self.tips[i], True, self.color_rect),
                (1070, t))
        self.surface_bg.blit(
            self.font_title.render(self.operates[0], True, self.color_rect),
            (1035, 530))
        t = 550
        for i in range(1, len(self.operates)):
            t += 30
            self.surface_bg.blit(
                self.font_text.render(self.operates[i], True, self.color_rect),
                (1070, t))
        self.surface_bg.blit(
            self.font_head.render("当前分数", True, self.color_black), (765, 150))
        t = 425
        for i in range(1, len(self.btnMsg)):
            self.surface_bg.blit(
                self.font_btn.render(self.btnMsg[i], True, self.color_rect),
                (820, t))
            t += 65
        self.setBtnReturn()

    def setReturn(self):
        self.__return -= 1

    def getReturn(self):
        return str(self.__return)

    def setBtnReturn(self):
        self.surface_bg.blit(
            self.font_btn.render(self.btnMsg[0] + self.getReturn() + "次", True,
                                 self.color_rect), (820, 360))

    def restart(self):
        self.__init__()
        self.start()

    def start(self):
        while 1:
            for e in pygame.event.get():
                if e.type == pygame.QUIT:
                    sys.exit()
                if e.type == KEYDOWN:
                    if e.key == K_ESCAPE:
                        sys.exit()
                    # if e.key == K_b:
                    #     self.restart()
            self.surface_bg.fill((255, 255, 255))
            self.draw_border()
            self.setTips()
            self.tick.tick(30)
            pygame.display.flip()


if __name__ == "__main__":
    game = Game()
    game.start()
