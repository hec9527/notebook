import turtle


#  使用递归实现科赫雪花
def draw(size, n):
    if n == 0:
        turtle.fd(size)
    else:
        for angle in [0, 60, -120, 60]:
            turtle.left(angle)
            draw(size / 3, n - 1)


def main(level):
    turtle.setup(1000, 600)
    turtle.penup()
    turtle.tracer(False)  # 跳过绘制动画
    turtle.goto(-250, 100)
    turtle.pendown()
    turtle.pensize(1)
    draw(500, level)
    turtle.right(120)
    draw(500, level)
    turtle.right(120)
    draw(500, level)
    turtle.hideturtle()


main(4)
turtle.done()
