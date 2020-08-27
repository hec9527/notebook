#!/usr/bin/env python3
# coding=utf-8
# -*- coding=utf-8 -*-
from PIL import Image, ImageDraw, ImageFont
import os
import time


def save(img, file_name):
    fs = os.path.dirname(__file__) + 'export.jpg'
    # if os.path.isfile(fs):
    img.save(fs, 'JPEG')


font_map = [
    ' ', ' ', '.', '。', 'o', 'O', 'P', 'W', 'Y', 'Q', 'G', 'K', '&', '#', 'M',
    'B'
]
img_name = os.path.dirname(__file__) + "/1.jpg"
f_size = 24
f_num_x = 300


def main():
    # 加载图像
    im = Image.open(img_name).convert('L')
    # 修改图像尺寸
    im = im.resize((f_num_x, int(f_num_x * im.size[1] / im.size[0])))
    # 。。。
    level = im.getextrema()[-1] / (len(font_map) - 1)

    im = im.point(lambda i: int(i / level))

    imn = Image.new('L', (im.size[0] * f_size, im.size[1] * f_size))

    f = ImageFont.truetype('arial.ttf', f_size)
    d = ImageDraw.Draw(imn)

    for y in range(0, im.size[1]):
        for x in range(0, im.size[0]):
            pp = im.getpixel((x, y))
            d.text((x * f_size, y * f_size),
                   font_map[len(font_map) - pp - 1],
                   fill=255,
                   font=f)
    save(imn, img_name)
    imn.show()


if __name__ == '__main__':
    tt = time.time()
    main()
    print(time.time() - tt)
