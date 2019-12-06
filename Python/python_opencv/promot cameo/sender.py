import socket,cv2,numpy

host='192.168.43.184'          #目的主机的IP地址
port=23456                     #目的程序端口号

s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)       #创建 UDP套接字
cap=cv2.VideoCapture(0)    #捕获本机的摄像头

while True:             # 通过循环读取图像并且发送的接收方
    ret,frame=cap.read()        
    
    cv2.imshow("a", frame)  # 测试是否捕获成功 并且显示
    
    print(type(frame))

    img = cv2.imencode(".jpg", frame)[1]  # 将图像压缩后发送
    
    f = open("./frame.jpg", "w")
    
    f.write(str(img))

    img = open("./frame.jpg", "rb").read()

    s.sendto(img,(host,port))

    if cv2.waitKey(1) & 0xFF == 27:
        break

cap.release()
cv2.destroyAllWindows()
