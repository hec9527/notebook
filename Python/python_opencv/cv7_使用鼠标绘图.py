import numpy,cv2

# 鼠标移动后调用
def draw_image(e,x,y,flag,paras):
    if e == cv2.EVENT_MOUSEMOVE :
        if mode:
            cv2.circle(img,(x,y),1,(255,255,0),-1)
img = numpy.zeros((600,1000,3),numpy.uint8)
cv2.namedWindow("画板")
cv2.setMouseCallback("画板",draw_image)
mode=False

while True:
    cv2.imshow("画板",img)
    k=cv2.waitKey(1)
    if k==ord("s"):
        mode = not mode
    elif  k==27:
        break
    elif k==ord("c"):
        img=None
        img = numpy.zeros((600,1000,3),numpy.uint8)
cv2.destroyAllWindows()


