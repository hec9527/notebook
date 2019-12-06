import cv2
import numpy


while True:
    # img = numpy.random.randint(0, 256, (540, 800, 3), dtype=numpy.uint8)
    img = numpy.random.randint(0, 256, (1080, 1920, 3), dtype=numpy.uint8)

    cv2.imshow("Random Image", img)

    cv2.waitKey(1)

cv2.destroyAllWindows()