import cv2, numpy


# 获取时间 cv2.getTickCount 通过这个可以获取当前的时间值

im = cv2.imread("./1.jpg")

# 可以直接调用opencv提供的API获取使用自己计算的结果  255-i 但是速度要慢很多
im = cv2.bitwise_not(im)

cv2.imshow("d", im)

cv2.waitKey(0)

cv2.destoryWindow('d')
