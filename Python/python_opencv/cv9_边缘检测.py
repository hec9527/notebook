import cv2,numpy

img=cv2.imread("./1.jpg",cv2.IMREAD_GRAYSCALE)

# cv2.imwrite("./1.png", cv2.Canny(img, 200, 300))

img_cannied=cv2.Canny(img,200,300)

cv2.imshow("show", img_cannied)

cv2.waitKey(0)

cv2.destroyAllWindows()