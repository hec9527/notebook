from PIL import Image
import sys
from os import path

def get_char(r, g, b, alpha=256):
    # 判断alpha的值
    if alpha == 0:
        return ' '
    # 获取字符集的长度
    length = len(ascii_char)
    # 将RGB值转为灰度值，范围0-255
    gray = int(0.2126 * r + 0.71152 * g + 0.0722 * b)
    # 灰度值的范围为 0-255 
    # 需要将灰度值映射到字符集上面
    uint = (256.0 + 1) / length
    # 返回灰度值对应的字符
    return ascii_char[int(gray / uint)]


def dealImage(path):
    print('正在处理图片...')
    # 打开图像并且调整宽高
    im = Image.open(path)
    
    if im.width>im.height:
        W = 800
        H = int(800 * im.height / im.width) // 2
    else:
        H = 300
        W = int(300 * im.width / im.height) * 2
    im = im.resize((W, H), Image.NEAREST)

    # 初始化输出的字符串
    text = ''
    
    # 遍历图像中的每一行
    for i in range(H):
        for j in range(W):
            text += get_char(*im.getpixel((j, i)))
        text += '\n'
    return text


if __name__ == "__main__":
    ascii_char = list("$@B%8&WM#*oahkbdpqwm+~- ")
    text = ''
    print("正在加载参数...")

    if len(sys.argv) > 1:
        for i in range(1, len(sys.argv)):
            if path.isfile(str(sys.argv[i])):
                print("正在加载图片...")
                Img = str(sys.argv[i])
                text = dealImage(Img)
                print(f'正在写入文件 {i}/{len(sys.argv)-1}...')
                f_write_path = f'./图像转字符结果_{i}.txt'
                f = open(f_write_path, 'wt', encoding='gb2312')
                f.write(text)
                f.close()
    else:
        Img = './1.jpg'
        print('正在加载图片...')
        text = dealImage(Img)
        print('正在写入文件...')
        f = open("./图像转字符结果.txt", 'wt', encoding='gb2312')
        f.write(text)
        f.close()
    print("处理完成,请按Enter键退出...")            
    input()
    