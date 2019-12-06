import cv2,numpy

cap=cv2.VideoCapture(0)   #0 表示内置摄像头编号

while True:
    # 一帧一帧的读取视频
    ret,frame=cap.read()

    # 镜像变换 1 左右变换  2 垂直变换
    frame = cv2.flip(frame, 1)

    # 转换成灰度图   可以不用转换也能显示
    gray=cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)

    # 显示转换后的图像信息
    cv2.imshow("Video",gray)

    # 如果按下esc 则退出
    if cv2.waitKey(1) & 0xFF == 27:
        break
    
cap.release()
cv2.destroyAllWindows()
