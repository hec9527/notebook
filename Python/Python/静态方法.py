

class StaticMethod():

    def __init__(self):
        self.name="tom"
        self.age = 18
        

    def play(self):
        print("%s正在斗地主" % self.name)

    @staticmethod
    def playGame():
        # 静态方法可以由类调用也可以由类的实例调用
        print("都在学习没人在玩")


StaticMethod.playGame()
p = StaticMethod()
p.play()
p.playGame()

