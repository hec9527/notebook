import turtle as t
import time
for i in range(4):
    t.fd(100)
    t.right(90)
time.sleep(3)
t.reset()

for i in range(6):
    t.fd(100)
    t.right(60)
time.sleep(3)
t.reset()

t.left(20)
for i in range(9):
    t.fd(100)
    t.right(80)
time.sleep(3)
t.reset()


# 设置初始位置
t.penup()
t.pensize(2)
t.speed(0)
t.left(90)
t.fd(200)
t.pendown()
t.right(90)
 

# 花蕊
t.fillcolor("red")
t.begin_fill()
t.circle(10,180)
t.circle(25,110)
t.left(50)
t.circle(60,45)
t.circle(20,170)
t.right(24)
t.fd(30)
t.left(10)
t.circle(30,110)
t.fd(20)
t.left(40)
t.circle(90,70)
t.circle(30,150)
t.right(30)
t.fd(15)
t.circle(80,90)
t.left(15)
t.fd(45)
t.right(165)
t.fd(20)
t.left(155)
t.circle(150,80)
t.left(50)
t.circle(150,90)
t.end_fill()
 
# 花瓣1
t.left(150)
t.circle(-90,70)
t.left(20)
t.circle(75,105)
t.setheading(60)
t.circle(80,98)
t.circle(-90,40)
 
# 花瓣2
t.left(180)
t.circle(90,40)
t.circle(-80,98)
t.setheading(-83)
 
# 叶子1
t.fd(30)
t.left(90)
t.fd(25)
t.left(45)
t.fillcolor("green")
t.begin_fill()
t.circle(-80,90)
t.right(90)
t.circle(-80,90)
t.end_fill()
 
t.right(135)
t.fd(60)
t.left(180)
t.fd(85)
t.left(90)
t.fd(80)
 
# 叶子2
t.right(90)
t.right(45)
t.fillcolor("green")
t.begin_fill()
t.circle(80,90)
t.left(90)
t.circle(80,90)
t.end_fill()
 
t.left(135)
t.fd(60)
t.left(180)
t.fd(60)
t.right(90)
t.circle(200,60)
t.hideturtle()


t.done()