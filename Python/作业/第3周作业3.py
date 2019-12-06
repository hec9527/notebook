import time
i=1
while True:
    num=i*7
    if (num%6==5) and (num%5==4) and (num%3==2) and (num%2==1):
        print("满足要求的数字为：{}".format(num))
        time.sleep(0.5)
    i=i+2