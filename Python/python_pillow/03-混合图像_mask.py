from PIL import Image
img1 = Image.open("./1.jpg").convert("RGBA")   # 打开图片并且转换为RGBA模式
size = img1.size  # 返回一个包含图像大小的元组
img2 = Image.open("./2.jpg").convert("RGBA")
img2 = img2.resize(size)  # 修改img2 为img1相同大小
img_mask = Image.open("./3.jpg").convert("L")  # 转为灰度图
img_mask = img_mask.resize(size)

outImg = Image.composite(img1, img2, img_mask)
outImg.show()