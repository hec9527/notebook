import cv2


img = cv2.imread("./1.jpg") 

cv2.imshow("ShowImage", img)

cv2.waitKey(0)

cv2.destroyWindow("ShowImage")
