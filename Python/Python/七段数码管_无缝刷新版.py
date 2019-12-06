import turtle,time

# 绘制一个字符串   turtle对象  绘制的字符串
# 绘制字符串之前需要将海龟移动到 该海归对象需要的位置
def draw_str(tur,Str):
    tur.penup()       # 容错性  在每次绘制某一个字符串的时候清除 之前绘制的   并且移动画笔到指定的地方
    tur.goto(tur.cpos[0],tur.cpos[1])   #　利用某一个画笔工具  自定义的cpos  位置属性设置它开始绘制的位置
    tur.pencolor(tuple(tur.color))     # 利用某一个画笔工具  自定义的color  位置属性设置它开始绘制的位置
    tur.clear()      # 清除 画笔工具绘制的元素
    for i in Str:       # 遍历字符串 绘制每一个数字 
        draw_one(tur,i) # 调用 draw_one() 函数绘制一个数字
    draw_text(tur)      # 数字绘制完成之后绘制 汉字

# 绘制一个数字  turtle对象 绘制的数字
# 绘制完成之后需要将海龟朝向设置为0  并且向右移动 一小段
def draw_one(tur,num):
    global line
    for i in range(len(line)): # 遍历七段数码管的 每一段
        draw_line(tur,True) if int(num) in line[i] else draw_line(tur,False)    # 如果传递过来的数字在需要打印的列表中 则打印这一笔
        if i !=3 :         # 绘制第四根数码管的时候不需要转弯
            tur.right(90)       # 将海龟向右转90  在需要的时候调用
    tur.seth(0)         # 绘制每一个数字之后设置其朝向为 右
    tur.fd(tur.numSpace)  # 绘制每一个数字之后 向右移动 ------数字之间的间隔  

# 绘制一条线
def draw_line(tur,flag):
    tur.penup()      #  绘制每一笔的开始结尾的时候 抬起画笔
    tur.fd(tur.lineSpace)    # 线条之前的间隔  (不显示)
    tur.pendown() if flag else tur.penup()     # 是否需要绘制这部分
    tur.fd(tur.lineLne)      # -----绘制的线条----- 如果传递的参数为TRUE 则绘制 否则不绘制
    tur.penup()          # 抬起画笔之后的部分移动不绘制
    tur.fd(tur.lineSpace)    # 线条之后的间隔  (不显示)   

# 绘制汉字信息
def draw_text(tur):
    tur.fd(tur.numSpace)   # 下面三行代码用于移动画笔工具 在绘制 汉字的时候 调整汉字的位置
    tur.right(90)
    tur.fd(tur.numSpace*3)
    tur.seth(0)
    tur.pencolor("red")   # 设置画笔为红色   用于书写汉字  
    tur.write(tur.title,font=("微软雅黑",tur.fontSize))   # 书写汉字  书写的汉字为每一个turtle对象保存的title属性

# 单独绘制星期信息      星期在 日期 改变的额时候一起改变
def draw_week(tur):
    global timeNew
    tur.penup()   # 抬起画笔
    tur.goto(tur.cpos[0],tur.cpos[1])  # 将画笔移动到指定的位置
    tur.pendown()       # 放下画笔 书写星期信息
    tur.pencolor(tuple(tur.color))
    tur.write(timeNew[-1],font=("微软雅黑",tur.fontSize))   # 书写星期信息

# 获取从哪里开始 当前时间和 之前的时间有改变  返回索引
def get_def():
    global timeOld,timeNew
    for i in range(0,6):        # 从0到6 遍历时间列表的每一个元素 查看是否有不同的地方
        if timeOld and timeOld[i]==timeNew[i]:      # 在 timeOld 存在的时候 判断响应位置的 timeOld 和 timeNew 是否时同样的值
            continue        # 值相同 这部分不需要重新绘制
        else:     # 值不相同 从这里到最后一个都需要重新绘制一遍
            timeOld=timeNew    # 将现在的时间存为 上一个时间  
            return i   # 返回第一个不同之处的索引的值 并且从这里开始重新绘制之后的元素
    return 0    # 如果遍历结束之后都一样 则返回0 即全部都不需要重新绘制

# 初始化画笔 以及相关数据
def init():
    global printer,line,timeOld,timeNew
    turtle.setup(900,400)     # 设置画布的大小
    turtle.tracer(False)        # 跳过绘制动画
    turtle.colormode(255)   # 设置色彩模式为 rgb
    turtle.hideturtle()     # 隐藏 海龟
    printer=[]    #  用于保存 turtle对象的列表
    text=['年','月','日','时','分','秒','星期']  # 用于保存 在绘制日期之后需要绘制的汉字
    line=[                      # 绘制顺序 有哪些数字需要绘制这一笔
            [2,3,4,5,6,8,9],      # 绘制中间向右
            [0,1,3,4,5,6,7,8,9],  #绘制右下 右下
            [0,2,3,5,6,8,9],      # 绘制 下向左
            [0,2,6,8],          #绘制 左下 向上
            [0,4,5,6,8,9],      # 绘制 左上 向上
            [0,2,3,5,6,7,8,9],  #绘制 上 向右
            [0,1,2,3,4,7,8,9],  # 绘制右上 向下
        ]
    timeOld=[]    # 保存的上一个时间   用于和现在的时间来对比
    timeNew=[]    # 保存当前的时间     用于和上一个时间来对比
    for i in range(0,len(text)):    # 利用循环生成  turtle对象  设置属性并且放置在列表里面
        printer.append(turtle.Turtle())   # 添加到列表中 
        printer[i].title=text[i]        # 添加一个title 属性  用于这个画笔将会绘制的汉字
        # printer[i].hideturtle()      # 隐藏画笔  测试的时候注释掉
        if 3>i>=0:  # 设置第 1-3 个画笔的属性
            if i==0:        # 设置第一个画笔的位置
                printer[i].cpos=[-120,-120]  
            elif i == 1 or i == 2:    # 设置第二、三个画笔的位置
                printer[i].cpos=[-80+i*60,-120] 
            printer[i].lineLne=10     # 需要绘制的线的长度
            printer[i].lineSpace=2    # 绘制的线的转角处的长度
            printer[i].color=(51,102,103)  # 绘制的线的 颜色
            printer[i].numSpace=5     # 数字之间的间隔
            printer[i].fontSize=14    # 字体的大小
            printer[i].pensize(3)     # 画笔的大小
        elif 6>i>=3:   #设置第 4-6 个画笔的属性     时分秒的属性
            printer[i].lineLne=35       
            printer[i].lineSpace=7
            printer[i].numSpace=15
            printer[i].fontSize=24
            printer[i].cpos=[-250+(190*(i-3)),50]   
            printer[i].color=(51,102,204)
            printer[i].pensize(5)
        elif i==6:                  # 设置 周目 属性
            printer[i].lineLne=7
            printer[i].lineSpace=2
            printer[i].numSpace=5
            printer[i].fontSize=18
            printer[i].cpos=[-50,-70]   
            printer[i].color=(51,153,102)
            printer[i].pensize(5)

# 主函数 循环遍历时间 调用相关的绘制函数
def main():
    global timeNew
    init()  # 初始化数据 画笔工具和相关数据
    while True:         # 循环获取当前事件
        timeNew=time.strftime("%Y-%m-%d-%H-%M-%S-%A",time.localtime(time.time())).split("-")   # 获取当前的时间  利用分隔符来分割成一个列表
        def_time=get_def()     # 查看当前的时间与上一个时间之间的不同之处  返回第一个不同的索引
        if def_time<=2:     # 如果 从第三处开始改变 即 日期改变的时候 重新绘制 周目
            draw_week(printer[6])       # 绘制周目  
        for i in range(def_time,6):    # 从有开始改变的地方重新绘制
            draw_str(printer[int(i)],timeNew[int(i)])   # 调用  drwa_str 函数绘制时间列表的 某一个时间分片
        time.sleep(0.1)   # 降低刷新速度 减少资源使用
    turtle.done()   # 没啥用的函数  好像可以不调用 节省代码可以删掉

# 程序入口地点
#  main loop  --> draw_str()  --> draw_one()  --> draw_line()         
# draw_text()  绘制完一个str后绘制汉字
# draw_week()  在需要的时候调用
if __name__=="__main__":
    main() 
