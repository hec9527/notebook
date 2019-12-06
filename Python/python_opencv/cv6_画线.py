import cv2,numpy

#创建一张 黑色图片
img=numpy.zeros((512,512,3),numpy.uint8)
#在图像上显示文字
font=cv2.FONT_HERSHEY_COMPLEX_SMALL
cv2.putText(img,"OpenCV",(10,500),font,4,(255,255,255),2,cv2.LINE_AA)
#显示图像
cv2.imshow("Image",img)
cv2.waitKey(0)

#在图像上面画一条线
cv2.line(img,(0,0),(512,512),(255,0,255),5)
cv2.imshow("Image",img)
cv2.waitKey(0)

# 画矩形
cv2.rectangle(img,(200,100),(400,510),(255,0,0),7)
cv2.imshow("Image",img)
cv2.waitKey(0)

#画圆
cv2.circle(img,(255,255),90,(255,255,255),4)
cv2.imshow("Image",img)
cv2.waitKey(0)

#椭圆
cv2.ellipse(img,(256,256),(100,50),0,0,180,255,-1)
cv2.imshow("Image",img)
cv2.waitKey(0)
#销毁窗口
cv2.destroyWindow("Image")