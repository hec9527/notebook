import socket
import threading
import struct
import time
import cv2
import numpy
 
class Carame_Accept_Object:
    def __init__(self,S_addr_port=("",8880)):
        self.resolution=(640,480)       #分辨率
        self.img_fps=15                 #每秒传输多少帧数
        self.addr_port=S_addr_port
        self.Set_Socket(self.addr_port)
 
    #设置套接字
    def Set_Socket(self,S_addr_port):
        self.server=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        self.server.setsockopt(socket.SOL_SOCKET,socket.SO_REUSEADDR,1) #端口可复用
        self.server.bind(S_addr_port)
        self.server.listen(5)
 
 
def check_option(object,client):
    #按格式解码，确定帧数和分辨率
    info=struct.unpack('lhh',client.recv(8))
    if info[0]>888:
        object.img_fps=int(info[0])-888          #获取帧数
        object.resolution=list(object.resolution)
        # 获取分辨率
        object.resolution[0]=info[1]
        object.resolution[1]=info[2]
        object.resolution = tuple(object.resolution)
        return 1
    else:
        return 0
 
def RT_Image(object,client,D_addr):
    if(check_option(object,client)==0):
        return
    camera = cv2.VideoCapture(0)                                #从摄像头中获取视频
    img_param=[int(cv2.IMWRITE_JPEG_QUALITY),object.img_fps]  #设置传送图像格式、帧数
    while(1):
        time.sleep(0.1)             #推迟线程运行0.1s
        _,object.img=camera.read()  #读取视频每一帧
 
        object.img=cv2.resize(object.img,object.resolution)     #按要求调整图像大小(resolution必须为元组)
        _,img_encode=cv2.imencode('.jpg',object.img,img_param)  #按格式生成图片
        img_code=numpy.array(img_encode)                        #转换成矩阵
        object.img_data=img_code.tostring()                     #生成相应的字符串
        try:
            #按照相应的格式进行打包发送图片
            client.send(struct.pack("lhh",len(object.img_data),object.resolution[0],object.resolution[1])+object.img_data)
        except:
            camera.release()        #释放资源
            return
 
if __name__ == '__main__':
    camera=Carame_Accept_Object()
    while(1):
        client,D_addr=camera.server.accept()
        clientThread=threading.Thread(None,target=RT_Image,args=(camera,client,D_addr,))
        clientThread.start()
