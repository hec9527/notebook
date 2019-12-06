import socket,time

host="192.168.1.110"
port=12345
s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)


while True:
    try:
        s.connect((host,port))
        while True:
            print(s.recv(1024).decode())
    except Exception as e:
        print(e)
        time.sleep(3)
        break