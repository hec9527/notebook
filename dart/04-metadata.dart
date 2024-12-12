class Animal {
  final String name;

  const Animal(this.name);

  @Animal('ga')
  void feed() {
    print("feed");
  }

  @Deprecated("废弃了  废弃了")
  void run() {
    print('废弃的api');
  }
}

class Dog extends Animal {
  const Dog(String name) : super(name);

  void feed() {
    print("喂狗");
  }
}

void main() {
  var dog = Dog('saga')..feed();

  dog.run();
}
