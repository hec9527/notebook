Iterable<int> range(int start, int end) sync* {
  var i = start;
  while (i <= end) {
    yield i++;
  }
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);
}

void main() {
  const arr = [11, 12, 25, 36, 47, 58, 69];

  for (final i in range(1, 5)) {
    print(i);
  }

  var callbacks = [];
  for (var i = 0; i < 2; i++) {
    callbacks.add(() => print(i));
  }

  for (final c in callbacks) {
    c();
  }

  print("+++++++");

  for (final i in arr) {
    print(i);
  }

  var personList = <Person>[
    Person('saga', 22),
    Person("Heli", 43),
    Person("Alice", 20)
  ];

  for (final Person(:name, :age) in personList) {
    print("I'am $name, $age years old.");
  }

  range(1, 3).forEach(print);
}
