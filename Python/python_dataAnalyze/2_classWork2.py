from PIL import Image
import numpy

img = Image.open("./1.jpg")
img.show()

arr = numpy.asarray(img)  # 由图像转换而来的数组
arr_change = arr[1000:2000, 2000:3000,:]

arrImage=Image.fromarray(arr_change.astype("uint8"))

arrImage.show()





















