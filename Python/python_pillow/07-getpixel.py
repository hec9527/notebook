from PIL import Image

img = Image.open("./1.jpg")
data = img.getpixel((100, 100))
print(data)

