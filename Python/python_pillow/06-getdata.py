from PIL import Image

img = Image.open("./1.jpg")
data = img.getextrema()
print(data)

