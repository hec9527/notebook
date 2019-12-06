from PIL import Image
img1 = Image.open("./1.jpg").convert("RGBA")   # 打开图片并且转换为RGBA模式
size = img1.size  # 返回一个包含图像大小的元组
img2 = Image.open("./2.jpg").convert("RGBA")
img2 = img2.resize(size)  # 修改img2 为img1相同大小
outImg = Image.alpha_composite(img1, img2)
outImg.show()
# 因为两张图的 alpha 通道(不透明度)都为1，即完全不透明所以第2张图完全覆盖了第一张图