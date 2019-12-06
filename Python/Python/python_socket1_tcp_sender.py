import socket,time
host="192.168.1.110"
port=12345
s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.bind((host,port))
s.listen(5)  # 最大连接数5

#循环检测是否有设备连接进来
while True:
    print("wait for device connecte.....\n")
    conn,addr=s.accept()  # 返回两个值，需要用两个参数接收    接收客户端的连接
    if conn:
        print("A device connected!")
        while True:     #循环发送数据 
           try:
                conn.send("嘻嘻哈哈".encode())
                print("\rsending data...",end="")
                time.sleep(1)
           except Exception as e:
                print("\nA connect lost")
                print(e)
                conn=False
                break
    time.sleep(1)
    continue
time.sleep(3)