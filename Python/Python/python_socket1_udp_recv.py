import socket,json

#创建UDP套接字
s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
s.bind(("192.168.1.110",12342))
while True:
    recv_Data=s.recvfrom(1024)
    recv_Data=recv_Data[0].decode(encoding="utf8")
    print(recv_Data)

#   创建UDP套接字接收数据  需要执行需要绑定的主机名和端口号，
#   当ip地址为''的时候，表示绑定所有的主机
