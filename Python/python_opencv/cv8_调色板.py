import cv2,numpy

def nothing(arg):
    pass

img=numpy.zeros((300,650,3),numpy.uint8)
cv2.namedWindow("image")

# 滑动条名称  显示窗口名称   默认值   最大值  回调函数
cv2.createTrackbar("R",'image',0,255,nothing)
cv2.createTrackbar("G","image",0,255,nothing)
cv2.createTrackbar("B","image",0,255,nothing)

switch='OFF/No'
cv2.createTrackbar(switch,'image',0,1,nothing)

while True:
    cv2.imshow('image',img)
    k=cv2.waitKey(1) & 0xFF
    if k==27:
        break
    
    r=cv2.getTrackbarPos("R","image")
    g=cv2.getTrackbarPos("G","image")
    b=cv2.getTrackbarPos("B","image")
    s=cv2.getTrackbarPos(switch,"image")

    if s==0:
        img[:]=0
    else:
        img[:]=[b,g,r]
cv2.destroyAllWindows()