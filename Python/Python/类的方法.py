''' 
    python当中可以在类中定义类的方法。
    类的方法的第一个参数约定名为cls，它表示当前类的相关信息的对象
    （类本身也是一个对象，有些地方称之为  元数据对象）
    类的方法使用  @classmethod 修饰符修饰
'''




class MyClassMethod():


    def __init__(self, name, age):
        self.name = name
        self.age = age


    @classmethod
    def showClassInfo(cls):
        print("类的方法\t",cls)

    def show(self):
        print(self.name, self.age)


MyClassMethod.showClassInfo()

mclass = MyClassMethod("tom", 18)
mclass.show()
