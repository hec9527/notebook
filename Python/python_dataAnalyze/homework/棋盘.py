import numpy
from PIL import Image

imBlack = numpy.full((100, 100, 3), [49, 49, 49], dtype="uint8")
imWhite = numpy.full((100, 100, 3), [208, 208, 208], dtype="uint8")

line1 = numpy.hstack((imBlack, imWhite)*4)
line2 = numpy.hstack((imWhite, imBlack)*4)
lineAll = numpy.vstack((line1, line2) * 4)

img = Image.fromarray(lineAll.astype("uint8"))
img.show()
