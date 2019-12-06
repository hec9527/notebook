import random
from PIL import Image, ImageDraw, ImageFont

def getRandomColor():
    r = random.randint(0, 155)
    g = random.randint(0, 155)
    b = random.randint(0, 155)
    return (r, g, b)

def getRandomFont():
    char = []
    for i in range(4):
        c = random.randint(65, 180)
        c = random.randint(0, 9) if c > 122 else chr(c)
        char.append(c)
    return tuple(char)

def getRandomFontSize():
    return random.randint(24, 65)

def getRandomPos(index):
    index = (index + 1) * 80
    x = random.randint(index - 20, index + 20)
    y = random.randint(40, 90)
    return (x, y)

def getRandomPos1():
    x1 = random.randint(0, 30)
    x2 = random.randint(360, 400)
    y1 = random.randint(0, 150)
    y2 = random.randint(0, 150)
    return (x1,y1,x2,y2)

def main():
    img = Image.new("RGB", (400,150), (200, 200, 200))
    draw = ImageDraw.Draw(img)
    strs = getRandomFont()
    f = ImageFont.truetype('arial.ttf', getRandomFontSize())
    for i in range(0, 4):
        color = getRandomColor()
        fontsize = getRandomFontSize()
        pos = getRandomPos(i)
        draw.text((pos), str(strs[i]), fill=getRandomColor(), font=f)
        draw.line(getRandomPos1(), fill=getRandomColor())
    img.show()

if __name__ == "__main__":
    for i in range(10):
        main()