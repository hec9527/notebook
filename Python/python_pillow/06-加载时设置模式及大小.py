from PIL import Image

# 目前只支持*.jpeg格式的文件
img = open("./1.jpeg").draft("RGBA", (800, 600))
img.show()