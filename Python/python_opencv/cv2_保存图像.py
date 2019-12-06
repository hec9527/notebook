import cv2

img = cv2.imread("1.jpg")

cv2.imshow("Press ang key to save excpte exit",img)

k=cv2.waitKey(0)&0xFF

if k==27:
    cv2.destroyAllWindows()
else:
    cv2.imwrite("./1_SaveImage.jpg",img)
    cv2.destroyAllWindows()
