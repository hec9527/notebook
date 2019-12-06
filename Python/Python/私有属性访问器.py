# 私有属性



class Personal():

    def __init__(self):
        self._name = "tom"
        self._age = 18

    # 访问器  getter方法  可用于访问私有属性
    @property
    def age(self):
        return self._age

    # 修改器  setter方法  用于修改私有属性变量
    @age.setter
    def age(self, age):
        self._age=age

    def show(self):
        print(f"name:{self._name},age:{self._age}")


personal = Personal()
print(personal._age)
personal.show()
personal.age = 20
personal.show()

