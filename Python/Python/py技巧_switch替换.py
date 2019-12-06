
def function1(msg):
    print("函数1打印类容", msg)
    

def function2(msg):
    print("函数2打印类容", msg)
    
def function3(msg):
    print("函数3打印类容", msg)
    


def haha(typ, msg):
    dic = {
        'fn1': function1,
        "fn2": function2,
        'fn3':function3
    }
    dic[typ](msg)


haha('fn1','你妹的')
haha('fn3','他妹的')
haha('fn2','干嘛呢')

