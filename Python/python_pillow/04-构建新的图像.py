from PIL import Image

size = (800, 600)
img1 = Image.new("RGB", size, "red")  # 生成红色的RGB图像
img2 = Image.new("RGBA", size, (0, 255, 255, 1))  # 生成RGBA模式的不透明图像

img1.show()  # 红色
img2.show()  # 淡蓝色
