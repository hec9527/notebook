import time,turtle,random

turtle.setup(1200,600)
text=['年','月','日','时','分','秒']
tip=[3,5,7,9,11,13]
line=[
    ["2","3",'4','5','6','8','9'],
    ['0',"1","3","4","5","6","7","8","9"],
    ["0","2","3","5","6","8"],
    ["0","2","6","8"],
    ['0','4','5','6','8','9'],
    ['0','2','3','5','6','7','8','9'],
    ['0','1','2','3','4','7','8','9'],
    [0,1,2,4,5]
]


# 绘制一个数字
def draw_one(_chr):
    change_color()
    for i in range(len(line)-1):
        draw_line(True) if _chr in line[i] else draw_line(False)
        if i in line[-1]:
            turtle.right(90)

# 绘制一条线
def draw_line(flag):
    turtle.fd(3)
    turtle.pendown() if flag else turtle.penup()     #是否需要绘制这部分
    turtle.fd(20)
    turtle.penup()
    turtle.fd(3)

# 写字
def draw_font(flag,index):
    if flag:
        turtle.fd(20)
        turtle.pencolor("red")
        turtle.write(text[index],font=("微软雅黑",20))
        turtle.fd(30)
    else:
        turtle.fd(40)

# 修改字体颜色
def change_color():
    color[0] += random.randint(0,18)
    turtle.pencolor(tuple(color))

# 通过循环获取当前时间并且绘制出来
while True:
    #重置当画布并且设置  属性
    turtle.clear()
    turtle.pensize(5)
    turtle.colormode(255)
    turtle.speed(0)
    turtle.penup()
    turtle.goto(-500,0)
    turtle.Turtle().screen.delay(0)
    color=[0,100,180]

    # 获取当前时间 转为str
    timeNow=str(time.strftime("%Y%m%d%H%M%S",time.gmtime()))

    # 遍历当前时间
    for i in range(len(timeNow)):           #通过索引遍历字符串
        draw_one(timeNow[i])
        turtle.seth(0)
        draw_font(True,tip.index(i)) if i in tip else draw_font(False,0)

    time.sleep(0.5)