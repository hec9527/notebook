import socket,cv2,numpy

host='192.168.43.184'               #绑定当前主机    如果不在同一台主机上 推荐使用IP地址
port=23456                          #当前程序运行端口   

s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)       #创建UDP套接字
s.bind((host,port))

while True:
    try:
        data=None
        _recv_Data = 1
        while _recv_Data:
            _recv_Data, infor = s.recvfrom(1024)
            data += _recv_Data

        img = numpy.asarray(bytearray(data), dtype="uint8")
        img = cv2.imdecode(img, cv2.IMREAD_COLOR)
        cv2.imshow("NewVideo",img)
    except Exception as e:
        print(e)
        input("some error ,press Enter to close!")
