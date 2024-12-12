class Person {
  final String name;
  final int age;

  // static const Person person = Person("saga", 12);

  const Person(this.name, this.age);

  void printInfo() {
    print("$name $age");
  }
}

class Runner {
  void run() {
    print("run");
  }
}

class Student extends Person implements Runner {
  int number;

  Student(String name, int age, this.number) : super(name, age);

  @override
  void run() {
    print('$name running...');
  }
}

// 其他各种类型的构造函数
class DefaultConstructor {
  final int x = 2;
}

class NamedConstructor {
  final int x;

  NamedConstructor.init() : x = 2;
}

void main() {
  const a = Person('saga', 12);
  const b = Person("alice", 20);

  assert(a == b);

  print(a.name);
  print(b.name);

  final Person s = Student("小明", 11, 10086);

  if (s is Student) {
    print(s.number);
    s.run();
  }
  print(s.runtimeType == Person);

  var d = DefaultConstructor();
  print(d.x);

  var n = NamedConstructor.init();
  print(n.x);
}
