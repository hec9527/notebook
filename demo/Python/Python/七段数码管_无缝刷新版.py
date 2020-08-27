#!/usr/bin/env python3
# -*- coding=utf-8 -*-
# coding=utf-8

import turtle
import time


def draw_str(tur, Str):
    tur.penup()
    tur.goto(tur.cpos[0], tur.cpos[1])
    tur.pencolor(tuple(tur.color))
    tur.clear()
    for i in Str:
        draw_one(tur, i)
    draw_text(tur)


def draw_one(tur, num):
    global line
    for i in range(len(line)):
        draw_line(tur, True) if int(num) in line[i] else draw_line(tur, False)
        if i != 3:
            tur.right(90)
    tur.seth(0)
    tur.fd(tur.numSpace)


def draw_line(tur, flag):
    tur.penup()
    tur.fd(tur.lineSpace)
    tur.pendown() if flag else tur.penup()
    tur.fd(tur.lineLen)
    tur.penup()
    tur.fd(tur.lineSpace)


def draw_text(tur):
    tur.fd(tur.numSpace)
    tur.right(90)
    tur.fd(tur.numSpace * 3)
    tur.seth(0)
    tur.pencolor("red")
    tur.write(tur.title, font=("微软雅黑", tur.fontSize))


def draw_week(tur):
    global timeNew
    tur.penup()
    tur.goto(tur.cpos[0], tur.cpos[1])
    tur.pendown()
    tur.pencolor(tuple(tur.color))
    tur.write(timeNew[-1], font=("微软雅黑", tur.fontSize))


def get_def():
    global timeOld, timeNew
    for i in range(0, 6):
        if timeOld and timeOld[i] == timeNew[i]:
            continue
        else:
            timeOld = timeNew
            return i
    return 0


def init():
    global printer, line, timeOld, timeNew
    turtle.setup(900, 400)
    turtle.tracer(False)
    turtle.colormode(255)
    turtle.hideturtle()
    printer = []
    text = ['年', '月', '日', '时', '分', '秒', '星期']
    line = [
        [2, 3, 4, 5, 6, 8, 9],
        [0, 1, 3, 4, 5, 6, 7, 8, 9],
        [0, 2, 3, 5, 6, 8, 9],
        [0, 2, 6, 8],
        [0, 4, 5, 6, 8, 9],
        [0, 2, 3, 5, 6, 7, 8, 9],
        [0, 1, 2, 3, 4, 7, 8, 9],
    ]
    timeOld = []
    timeNew = []
    for i in range(0, len(text)):
        printer.append(turtle.Turtle())
        printer[i].title = text[i]

        if 3 > i >= 0:
            if i == 0:
                printer[i].cpos = [-120, -120]
            elif i == 1 or i == 2:
                printer[i].cpos = [-80 + i * 60, -120]
            printer[i].lineLen = 10
            printer[i].lineSpace = 2
            printer[i].color = (51, 102, 103)
            printer[i].numSpace = 5
            printer[i].fontSize = 14
            printer[i].pensize(3)
        elif 6 > i >= 3:
            printer[i].lineLen = 35
            printer[i].lineSpace = 7
            printer[i].numSpace = 15
            printer[i].fontSize = 24
            printer[i].cpos = [-250 + (190 * (i - 3)), 50]
            printer[i].color = (51, 102, 204)
            printer[i].pensize(5)
        elif i == 6:
            printer[i].lineLen = 7
            printer[i].lineSpace = 2
            printer[i].numSpace = 5
            printer[i].fontSize = 18
            printer[i].cpos = [-50, -70]
            printer[i].color = (51, 153, 102)
            printer[i].pensize(5)


def main():
    global timeNew
    init()
    while True:
        timeNew = time.strftime("%Y-%m-%d-%H-%M-%S-%A",
                                time.localtime(time.time())).split("-")
        def_time = get_def()
        if def_time <= 2:
            draw_week(printer[6])
        for i in range(def_time, 6):
            draw_str(printer[int(i)], timeNew[int(i)])
        time.sleep(0.1)
    turtle.done()


if __name__ == "__main__":
    main()
