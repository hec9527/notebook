import cv2
import numpy as np

#   锐化   图片

from scipy import ndimage
kernel_3x3=np.array([
    [-1,-1,-1],
    [-1,8,-1],
    [-1,-1,-1]
])

img=cv2.imread("./1.jpg",0)
k3F=ndimage.convolve(img,kernel_3x3)
blurred=cv2.GaussianBlur(img,(17,17),0)
g_hpf=img-blurred

cv2.imshow("3x3",k3)
cv2.imshow("g_hpf",g_hpf)
cv2.waitKey(0)
cv2.destroyAllWindows()



