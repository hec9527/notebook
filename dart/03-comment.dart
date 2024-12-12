import 'dart:ffi';

void main() {
  // 单行注释

  /*
     多行注释
  */

  ///  多行注释
  /// [sayName] 函数
  Null sayHello(String name) {
    print("hello $name");
  }

  Null sayName(String name) {
    print("my name $name");
  }

  sayHello("saga");
}
