from PIL import Image

img = Image.open("./1.jpg")
img2 = Image.open("./2.jpg")
img = Image.paste(img, (50, 50, 50, 50), None)
img.show()