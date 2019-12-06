import cv2, numpy
img = numpy.zeros((200, 200), dtype=numpy.uint8)

img[50:150, 50:150] = 255

ret, thresh = cv2.threshold(img, 237, 255, 0)

image,contours,hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

color = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)

img = cv2.drawContours(color, contours, -1, (0, 0, 255), 5)

cv2.imshow("show", img)

cv2.waitKey(0)

cv2.destroyAllWindows()
