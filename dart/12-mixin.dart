mixin Runnable on Person {
  double _speed = 10;

  void setSpeed(double speed) {
    this._speed = speed;
  }

  void run() {
    print("$name run as speed $_speed km/h");
  }
}

class Person {
  String name;

  Person(this.name);
}

class Student extends Person with Runnable {
  Student(
    String name,
  ) : super(name);
}

void main() {
  var p = Student('saga');
  p.setSpeed(20.0);
  p.run();
}
