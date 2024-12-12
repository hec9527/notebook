void main() {
  var a = 10;
  var b = 3;
  print(a / b);
  print(a ~/ b);
  print(a % b);

  print(a++);
  print(++a);
  print(a);

  var str = StringBuffer()
    ..write('hello')
    ..write(' word')
    ..write("!");

  print(str);
}

/*

.. 操作符     秀儿

类似于javascript中的with,减少scope变量的引用

 */