import socket,os

def getIp():
    '获取本机IP地址，需要联网使用'
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)  #使用UDP套接字查看本机的IP地址
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except Exception as e:
        print(e)
        return False
    return ip

if __name__ == "__main__":
    ip, port = getIp() or "127.0.0.1", 45670
    print("当前主机IP为：" + str(ip) + "\n当前端口：" + str(port))
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((ip, port))
    s.listen(2)
    con, info = s.accept()
    if con:
        print("connected!")
        fileName = con.recv(1024).decode()
        if os.path.isfile("./" + fileName):
            print("文件已经存在，没有做任何修改！")
            input("按回车继续...")
            os._exit()
        file_recv = open("./" + fileName, "ab")
        while True:
            recv_data = con.recv(1024)
            if not recv_data:
                break
            file_recv.write(recv_data)
