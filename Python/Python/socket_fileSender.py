import socket
from tkinter.filedialog import askopenfilename

if __name__ == "__main__":
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # 创建TCP套接字
    ip, port = input(">>IP Address<<") or "127.0.0.1", 45670
    s.connect((ip, port))
    file_path = askopenfilename()  # 获取要发送的文件的路径
    s.send(file_path.split('/')[-1].encode())  # 发送文件的名字及其后缀
    f = open(file_path, "rb").read()  # 发送文件主体
    s.sendall(f)