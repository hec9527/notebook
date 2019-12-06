from matplotlib import pyplot
import numpy, random

def drawX(plt):
    linex = numpy.arange(0, 1, 0.01)
    liney1 = numpy.arange(0, 1, 0.01)
    liney2 = numpy.arange(1, 0, -0.01)
    plt.rcParams['lines.linewidth'] = 2
    plt.xlim((0, 1))
    plt.ylim((0, 1))
    plt.plot(linex, liney1)
    plt.plot(linex, liney2)
    plt.axis("off")  # 去除X，Y 轴以及他们的数值

def drawO(plt):
    theta = numpy.linspace(0, 2*numpy.pi,800)
    x,y = numpy.cos(theta)*2, numpy.sin(theta)*2
    plt.plot(x, y, color='blue', linewidth=2.0)
    plt.axis("off")  # 去除X，Y 轴以及他们的数值

def main():
    for i in range(144):
        plot = pyplot.subplot2grid((12, 12), (i // 12, i % 12))
        flag = random.randint(0, 10)
        if flag > 5:
            drawX(pyplot)
        else:
            drawO(pyplot)
    pyplot.savefig("./subplot.jpg")
    pyplot.show()

if __name__ == "__main__":
    plot = pyplot.figure(figsize=(12, 12), dpi=300)
    main()