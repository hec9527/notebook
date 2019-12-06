from PIL import Image
img1 = Image.open("./1.jpg")
size = img1.size  # 返回一个包含图像大小的元组
img2 = Image.open("./2.jpg")
img2 = img2.resize(size)  # 修改img2 为img1相同大小
outImg = Image.blend(img1, img2, 0.3)
outImg.show()
