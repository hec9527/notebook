import cv2

cap = cv2.VideoCapture(0)

# 设置字节码
fource = cv2.VideoWriter_fourcc(*'XVID')

out = cv2.VideoWriter("outputVideoTest.avi", fource, 20.0, (640, 480))
while cap.isOpened():
    #从摄像头读取图像信息
    ret,frame=cap.read()

    if ret:
        # 旋转图像  可以不用旋转
        # frame=cv2.flip(frame,0)

        # 写入帧
        out.write(frame)

        # 在屏幕上显示图像信息
        cv2.imshow("Video",frame)

        if cv2.waitKey(1) & 0xFF ==27:
            break

    else:
        break
# 释放摄像头
cap.release()
# 释放写文件
out.release()
cv2.destroyAllWindows()