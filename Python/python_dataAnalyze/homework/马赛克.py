import numpy
from PIL import Image

img = Image.open("./source/1.jpg")
arr = numpy.asarray(img, dtype="uint8").copy()
x, y, z = arr.shape
# print(arr.shape)  # 2860, 4000, 3
# begin = (30, 30)   # 马赛克开始位置
# end = (800, 800)    #  马赛克结束位置
# numpy 数组  第一维是 列    第二维是 宽    第三维是  每个像素的值
begin = (0, 0)  
end = (y, x)    
step = 30    # 马赛克大小
# 每一列
for col in range(begin[1], end[1], step):
    # 每一行
    for row in range(begin[0], end[0], step):
        arr[col - step:col + step, row - step:row + step] = arr[col, row]
        
img = Image.fromarray(arr.astype("uint8"))
img.show()
