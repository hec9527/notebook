import socket,time,json

#创建UDP 套接字
s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

while True:
    list1=["123","234","嘻嘻哈哈","sdada","!@#$&*"]
    s.sendto(json.dumps(list1).encode(encoding='utf8'),("192.168.1.110",12342))
    print("\rsending....",end="")
    time.sleep(1)


#  创建UDP套接字 发送数据， 每次发送的时候标明要发送的目的地址，并且通过
#    encode()方法将发送的数据编码传输


