import socket
import cv2
import threading
import struct
import numpy
 
class Camera_Connect_Object:
    def __init__(self,D_addr_port=["",8880]):
        self.resolution=[640,480]
        self.addr_port=D_addr_port
        self.src=888+15                 #双方确定传输帧数，（888）为校验值
        self.interval=0                 #图片播放时间间隔
        self.img_fps=100               #每秒传输多少帧数
 
    def Set_socket(self):
        self.client=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        self.client.setsockopt(socket.SOL_SOCKET,socket.SO_REUSEADDR,1)
 
    def Socket_Connect(self):
        self.Set_socket()
        self.client.connect(self.addr_port)
        print("IP is %s:%d" % (self.addr_port[0],self.addr_port[1]))
 
    def RT_Image(self):
        #按照格式打包发送帧数和分辨率
        self.name=self.addr_port[0]+" Camera"
        self.client.send(struct.pack("lhh", self.src, self.resolution[0], self.resolution[1]))
        while(1):
            info=struct.unpack("lhh",self.client.recv(8))
            buf_size=info[0]                    #获取读的图片总长度
            if buf_size:
                try:
                    self.buf=b""                #代表bytes类型
                    temp_buf=self.buf
                    while(buf_size):            #读取每一张图片的长度
                        temp_buf=self.client.recv(buf_size)
                        buf_size-=len(temp_buf)
                        self.buf+=temp_buf      #获取图片
                        data = numpy.fromstring(self.buf, dtype='uint8')    #按uint8转换为图像矩阵
                        self.image = cv2.imdecode(data, 1)                  #图像解码
                        gray = cv2.cvtColor(self.image, cv2.COLOR_BGR2GRAY)
                        cv2.imshow(self.name, self.image)                   #展示图片
                except:
                    pass;
                finally:
                    if(cv2.waitKey(10)==27):        #每10ms刷新一次图片，按‘ESC’（27）退出
                        self.client.close()
                        cv2.destroyAllWindows()
                        break
 
    def Get_Data(self,interval):
        showThread=threading.Thread(target=self.RT_Image)
        showThread.start()
 
if __name__ == '__main__':
    camera=Camera_Connect_Object()
    camera.addr_port[0]=input("Please input IP:")
    camera.addr_port=tuple(camera.addr_port)
    camera.Socket_Connect()
    camera.Get_Data(camera.interval)