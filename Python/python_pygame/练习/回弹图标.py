import pygame, sys

pygame.init()  # 初始化
size = w, h = 600, 400  # 窗体的宽高
speed = [-4, 3]  # 速度
bg = (255, 255, 255)  # 背景图像
# bgImage = pygame.image.load("./resource/1.jpg")
# bgImage=bgImage.get_rect()

screen = pygame.display.set_mode(size)  #指定窗口大小   surface 对象
pygame.display.set_caption("pygame入门程序")  # 设置程序的标题

turtle = pygame.image.load(
    "./resource/images/ball_gray.png")  # 加载游戏中的图像  支持gif jpg png bmp 等图片格式
position = turtle.get_rect()  # 获取图像的矩形  surface对象

timer = pygame.time.Clock()

while True:
    for event in pygame.event.get():  # 遍历游戏的事件
        if event.type == pygame.QUIT:
            sys.exit()
    position = position.move(speed)  # 移动图像
    if position.left < 0 or position.right > w:  # 如果靠近左边若有右边为0的时候 图像水平翻转180° 且横向速度取反
        turtle = pygame.transform.flip(turtle, True, False)  # 水平翻转图像
        speed[0] = -speed[0]
    if position.top < 0 or position.bottom > h:  # 如果靠近上或则下边接  纵向速度取反
        speed[1] = -speed[1]
    screen.fill(bg)  # 更新背景
    screen.blit(turtle, position)  # 更新图像         将一个图像绘制到另外一个图像上
    pygame.display.flip()  # 更新界面
    timer.tick(30)  # 每秒10帧
    # print(timer.tick())  # 打印游戏的帧数
    # pygame.time.delay(10)  # 延迟10毫秒
