from PIL import Image
img = Image.open("./1.jpg")  #加载当前目录下的 1.jpg
img.rotate(45).show()  # 显示这张图片