from PIL import Image
import numpy

# 打开一张图像并且保存为numpy中的数组
img=Image.open("./source/1.jpg")
# img.show()   
img_numArr=numpy.asarray(img)

# 求图片的补图
img_butu = [255, 255, 255] - img_numArr
img_butu = Image.fromarray(img_butu.astype("uint8"))
# img_butu.show()

# 图像的灰度转换
img = Image.open("./source/1.jpg").convert("L")
img.show()
img_GRAY = 255 - numpy.array(img)
img_GRAY = Image.fromarray(img_GRAY.astype("uint8"))
# img_GRAY.show()

# 图像变换    --- 加深
img = Image.open("./source/1.jpg").convert("L")
img = numpy.array(img)
img_covert = 255 * (img / 255)** 2  # 看不懂的表达式
img_covert = Image.fromarray(img_covert.astype("uint8"))
img_covert.show()

# 边缘检测
img = numpy.array(Image.open("./source/1.jpg").convert("L")).astype("uint8")
deep = 10
grad_x, grad_y = numpy.gradient(img)  # 获取图像的梯度值
grad_x = grad_x * deep / 100
grad_y = grad_y * deep / 100

var_a = numpy.sqrt(grad_x ** 2 + grad_y ** 2 + 1)
uni_x = grad_x / var_a
uni_y = grad_y / var_a
uni_z = 1 / var_a

vec_el = numpy.pi / 2.2
vec_az = numpy.pi / 4

dx = numpy.cos(vec_el) * numpy.cos(vec_az)
dy = numpy.cos(vec_el) * numpy.sin(vec_az)
dz = numpy.sin(vec_el)

b = 255 * (dx * uni_x + dy * uni_y + dz * uni_z)
b.clip(vec_el)

img = Image.fromarray(b.astype("uint8"))
img.show()