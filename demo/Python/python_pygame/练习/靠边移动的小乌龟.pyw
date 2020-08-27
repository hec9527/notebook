import pygame,sys
from pygame.locals import *  #导入一些变量 如 K_F11

pygame.init()   # 初始化
size = w, h = 600, 400   # 窗体的宽高
bg = (255, 255, 255)  # 背景图像

screen = pygame.display.set_mode(size)  #指定窗口大小   surface 对象
screenList=pygame.display.list_modes()[0]
pygame.display.set_caption("pygame入门程序")  # 设置程序的标题
 
turtle = pygame.image.load("E:/Python/python_pygame/resource/images/乌龟.png")  # 加载游戏中的图像
position = turtle.get_rect() # 获取图像的矩形  surface对象
timer = pygame.time.Clock()

speed = [5, 0]  # 小乌龟顺时针走
t_right = pygame.transform.rotate(turtle, 270)
t_top = pygame.transform.rotate(turtle, 0)
t_left = pygame.transform.rotate(turtle, 90)
t_bottom = pygame.transform.rotate(turtle, 180)
turtle = t_right  # 初始向右
fullScreen=False
ratio=0

while True:
    for event in pygame.event.get():    # 遍历游戏的事件 
        if event.type == pygame.QUIT:
            sys.exit()
    position = position.move(speed)
    if event.type == KEYDOWN and event.key == K_F11:
        fullScreen = False if fullScreen == True else True
        if fullScreen:
            screen = pygame.display.set_mode(screenList, FULLSCREEN)
            w, h = screenList
        else:
            screen = pygame.display.set_mode(size, 0)
            w, h = 600, 400
    if position.right > w:      # 靠右边向下移动
        turtle = t_bottom
        position = t_bottom.get_rect()
        position.left = w - position.width
        speed = [0, 5]
    if position.bottom > h:  # 靠下边向左移动
        turtle = t_left
        position = turtle.get_rect()
        position.left = w - position.width
        position.top = h - position.height
        speed = [-5, 0]
    if position.left < 0:   # 靠左边向上移动
        turtle = t_top
        position = turtle.get_rect()
        position.left = 0
        position.top = h - position.height
        speed = [0, -5]
    if position.top < 0:    # 靠上边向右移动
        turtle = t_right
        position = turtle.get_rect()
        speed = [5, 0]
    screen.fill(bg)  # 更新背景   
    screen.blit(turtle, position)  # 更新图像         将一个图像绘制到另外一个图像上   
    pygame.display.flip()  # 更新界面
    timer.tick(30)  # 设置为30帧
    
