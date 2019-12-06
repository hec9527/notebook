import time,turtle

# 绘制一个数字
def draw_one(_chr):
    change_color()      # 每次绘制之前修改画笔颜色达到渐变效果
    for i in range(len(line)):  # 遍历七段数码管的 每一段
        draw_line(True) if _chr in line[i] else draw_line(False)    # 如果传递过来的数字在需要打印的列表中 则打印这一笔
        if i !=3 :         # 绘制第四根数码管的时候不需要转弯
            turtle.right(90)
    turtle.seth(0)
    turtle.fd(20)    

# 绘制一条线
def draw_line(flag):
    turtle.fd(3)        # 线条之前的间隔  (不显示)
    turtle.pendown() if flag else turtle.penup()     # 是否需要绘制这部分
    turtle.fd(20)       # 绘制的线条 如果传递的参数为TRUE 则绘制 否则不绘制
    turtle.penup()
    turtle.fd(3)        # 线条之后的间隔  (不显示)

# 写字
def draw_font():
    turtle.pencolor("red")
    turtle.write(text.pop(0),font=("微软雅黑",20))      # 在画布中数字文字  text的第一个字 写完了从列表中删除这个字 
    turtle.fd(40)

# 修改字体颜色
def change_color():
    color[0] += 16           # rgb 模式 修改r的值
    turtle.pencolor(tuple(color))           # rgb 模式修改画笔颜色需要传递一个元组

# 初始化画布以及相关数据
def init():
    turtle.setup(1200,600)
    turtle.clear()
    turtle.tracer(False)        # 跳过绘制动画
    turtle.Turtle().screen.delay(0)     #显示延迟
    # turtle.speed(0)       # 绘制速度
    # turtle.hideturtle()     # 隐藏 海龟
    turtle.colormode(255)  # 修改为rgb色彩模式    rbg/str/hsv(色调、饱和度、透明度)
    turtle.pensize(5)   # 画笔大小
    turtle.penup()      # 默认状态 抬起画笔
    turtle.goto(-500,0)  # 移动到开始绘制的地方

if __name__=="__main__":
    while True:
        init()
        color=[0,100,180]   # 画笔颜色  
        text=['年','月','日','时','分','秒']    # 需要添加的汉字
        line=[          # 绘制顺序 有哪些数字需要绘制这一笔
            ["2","3",'4','5','6','8','9'],      # 绘制中间向右
            ['0',"1","3","4","5","6","7","8","9"],  #绘制右下 右下
            ["0","2","3","5","6","8"],          # 绘制 下向左
            ["0","2","6","8"],          #绘制 左下 向上
            ['0','4','5','6','8','9'],      # 绘制 左上 向上
            ['0','2','3','5','6','7','8','9'],  #绘制 上 向右
            ['0','1','2','3','4','7','8','9'],  # 绘制右上 向下
        ]
        # 获取当前时间 转为str
        timeNow=str(time.strftime("%Y-%m-%d-%H-%M-%S-",time.gmtime()))
        # 遍历时间字符串
        for i in timeNow:           
            draw_font() if i == "-" else draw_one(i)    # 如果当前是 "-" 则打印汉字 否则打印数字
        time.sleep(0.9)

turtle.done()