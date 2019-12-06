import time,socket,threading



def fn_recv():
    while True:
        try:
            data,infor = s.recvfrom(1024)
            print("\r>{}:{}".format(str(infor),data.decode("utf-8")))
        except Exception as e:
            print(e)
            time.sleep(3)
            break


def fn_send():
    global s
    dest_host='192.168.43.184'          #目的主机的IP地址
    dest_port=23457                     #目的程序端口号
    while True:
        try:
            send_data=input(">")
            s.sendto(send_data.encode(),(dest_host,dest_port))
        except Exception as e:
            print(e)
            time.sleep(3)
            break

def socket_connect():
    global s
    host='192.168.43.184'               #绑定当前主机    如果不在同一台主机上 推荐使用IP地址
    port=23456                          #当前程序运行端口   
    
    print("{:^50}\n\n".format("欢迎使用聊天室软件bata_1.0"))
    print("当前设置的本机IP{},端口{}".format(host,port))

    s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)       #创建UDP套接字
    s.bind((host,port))


    # 采用多线程处理 
    task_send=threading.Thread(target=fn_send)
    task_recv=threading.Thread(target=fn_recv)
    #开启多线程
    task_send.start()
    task_recv.start()
    #加入到主线程
    task_recv.join()
    task_send.join()


s=None
if __name__ == "__main__":
    socket_connect()