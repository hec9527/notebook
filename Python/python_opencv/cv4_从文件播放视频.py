import cv2

cap=cv2.VideoCapture("./BadApple.mp4")

while(cap.isOpened()):
    # 从视频中读取文件信息
    ret,frame=cap.read()

    #转换为灰度图
    gray=cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)

    # 显示图像信息
    cv2.imshow("Video",gray)
    
    #控制视频播放速度
    cv2.waitKey(25)

    #如果按下esc 按键则退出
    if cv2.waitKey(1) & 0xFF == 27:
        break
    
cap.release()
cv2.destroyAllWindows()
