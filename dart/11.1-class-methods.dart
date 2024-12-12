class Point {
  double x;
  double y;

  Point(this.x, this.y);

  Point operator +(Point p) {
    return Point(x + p.x, y + p.y);
  }

  Point operator -(Point p) {
    return Point(x - p.x, y - p.y);
  }

  bool operator >(Point p) {
    return x - p.x + y - p.y > 0;
  }

  @override
  int get hashCode => Object.hash(this.x, this.y);
}

abstract class Person {
  final String name;

  Person(this.name);

  void sayName();
}

class Student extends Person {
  Student(String name) : super(name);

  void sayName() {
    print('my name is $name');
  }
}

void main() {
  var p1 = Point(3, 2);
  var p2 = Point(1, 4);

  print(p1.hashCode);
  print(p2.hashCode);

  print(p1 + p2);
  print(p1 - p2);
  print(p1 > p2);

  var s1 = Student('saga');
  s1.sayName();
}
