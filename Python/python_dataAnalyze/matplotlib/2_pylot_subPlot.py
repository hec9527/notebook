from matplotlib import pyplot
import numpy

line = numpy.arange(0, numpy.pi * 2, 0.01)
# pyplot.axes('off')


canvas = pyplot.figure(figsize=(8, 6), dpi=90)
subCanvas = canvas.add_subplot(2, 1, 1)  # 创建一个两行一列的子图    并且开始绘制第一幅图
pyplot.title("Test SubPlot")
pyplot.xlabel("x")
pyplot.ylabel("y")
pyplot.xlim((0, 1))
pyplot.ylim((0, 1))
pyplot.xticks([0, 0.2, 0.4, 0.6, 0.8, 1])
pyplot.yticks([0, 0.2, 0.4, 0.6, 0.8, 1])
pyplot.plot(line, line ** 2)
pyplot.plot(line, line ** 4)
pyplot.plot(line, line ** 1 / 2)
pyplot.legend(['y=x^2', "y=x^4", "y=x^-1"])
pyplot.axis("off")              # 去除X，Y 轴以及他们的数值
pyplot.show()