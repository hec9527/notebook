import turtle

#  使用递归实现科赫曲线

def draw(size,n):
    if n==0:
        turtle.fd(size)
    else:
        for angle in [0,60,-120,60]:
            turtle.left(angle)
            draw(size/3,n-1)

def main():
    turtle.setup(1000,600)
    turtle.penup()
    turtle.goto(-300,-50)
    turtle.pendown()
    turtle.pensize(2)
    draw(700,3)
    turtle.hideturtle()

main()
turtle.done()