from matplotlib import pyplot
import numpy

pyplot.rcParams['font.sans-serif'] = 'SimHei'
pyplot.rcParams['axes.unicode_minus'] = False

data = numpy.load("./resource/第三章课后练习数据集.npz")
title = data['feature_names']
value = data['data'][:-2]
# print(title)  #['时间' '年末总人口(万人)' '男性人口(万人)' '女性人口(万人)' '城镇人口(万人)' '乡村人口(万人)']
# print(value)  
# print(value.shape)  # (20, 6)

pyplot.figure(figsize=(6, 10), dpi=80)
pyplot.subplot(2, 1, 1)
pyplot.scatter(value[:, 0][::-1], value[:, 2][::-1], s=5, c='blue', marker="o")
pyplot.scatter(value[:, 0][::-1], value[:, 3][::-1], s=5, c='red', marker="o")
pyplot.title("1996年-2015年男女人口比例")
pyplot.xlabel("年份")
pyplot.ylabel("万人")
pyplot.legend(['---男', '---女'])
pyplot.ylim((55000, 75000))

pyplot.subplot(2, 1, 2)
pyplot.scatter(value[:, 0][::-1], value[:, 4][::-1], s=5, c='blue', marker="o")
pyplot.scatter(value[:, 0][::-1], value[:, 5][::-1], s=5, c='red', marker="o")
pyplot.title("1996年-2015年城镇农村人口比例")
pyplot.xlabel("年份")
pyplot.ylabel("万人")
pyplot.legend(['---城镇', '---农村'])
pyplot.show()
