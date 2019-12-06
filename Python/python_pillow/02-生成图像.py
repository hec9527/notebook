from PIL import Image
import glob,os

size = 256, 256  # 设置新生成的图像的宽高   宽相同的时候   高不缩放

for infile in glob.glob("*.jpg"):     # 从当前目录导入文件
    fil, ext = os.path.splitext(infile)
    img = Image.open(infile)
    img.thumbnail(size)
    img.show()

# 运行效果：
# 循环从当前的目录下导入文件   重新创建成为一个小图像然后显示出来