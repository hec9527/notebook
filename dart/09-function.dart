void sayName({String first = 'alice', String last = 'tim', required int age}) {
  print("Hello my name is $first $last,and I am $age years old.");
}

void sayName1(String name, {String greeting = 'hi'}) {
  print("$greeting, I'am $name!");
}

typedef IGreeting = void Function(String name, {String greeting});

typedef ISayHello = void Function(String name);

void forEach<T extends Object>(
    List<T> list, void Function(T item, int index, List<T> arr) callback) {
  for (var i = 0; i < list.length - 1; i++) {
    callback(list[i], i, list);
  }
}

void main() {
  sayName(age: 22);
  sayName(first: "saga", age: 34);
  sayName(last: "tom", age: 32);

  final g = sayName1;

  sayName1("saga", greeting: "hello");

  const arr = [11, 12, 25, 36, 47, 58, 69];

  // 匿名函数
  forEach(arr, (item, index, arr) {
    print("$item  $index  $arr");
  });

  g("tom");
}
