'''
  @Author: hc
  @Date: 2018-10-15 19:54:59 
  @Last Modified by:   hc
  @Last Modified time: 2018-10-15 19:54:59 
'''
import time,threading
class Timer():
    def setTimer(self,_time):
        '''
            打开一个定时器 非线程阻塞
            arg1:int 型的时间值
            获取倒计时时间调用 .getTime()
        '''
        try:
            time.sleep(0.2)
            self._flag=False
            self._index=_time
            threading.Thread(target=self.timer,args=(int(_time),)).start()
        except Exception as e:
            print(e)

    def clearTimer(self):
        '''
            清除定时器
        '''
        self._flag=True

    def timer(self,_time):
        '''
            打开一个定时器   线程阻塞
            arg1:int 型的时间值
            获取倒计时时间调用 .getTime()
        '''
        for i in range((_time+1)*10)[::-1]:
            time.sleep(0.1)
            self._index=i//10
            if self._flag==True:
                break

    def getTime(self):
        '''
            获取倒计时剩余时间
        '''
        return self._index