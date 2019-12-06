def rec_add(n):
    # 100 以内求和
    # if n<100:
    #     return n+rec_add(n+1)
    # else:
    #     return 100

    global sum_all
    if sum_all<1000:
        sum_all=sum_all+pow(n,2)
        return sum_all+rec_add(n+1)
    else:
        print(n-1)
        return 0
sum_all=0
rec_add(1)