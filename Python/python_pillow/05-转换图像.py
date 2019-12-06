from PIL import Image
import numpy
img = Image.open("./1.jpg")
arr = numpy.asarray(img)
print(type(arr))  # <class 'numpy.ndarray'>

img = Image.fromarray(arr)
print(type(img))  # <class 'PIL.Image.Image'>
img.show()
# 可以将ndarray数组转为 PIL的图像
