import numpy
from matplotlib import pyplot


theta = numpy.linspace(0, 2*numpy.pi,800)
x,y = numpy.cos(theta)*2, numpy.sin(theta)*2
pyplot.plot(x, y, color='blue', linewidth=2.0)
pyplot.show()