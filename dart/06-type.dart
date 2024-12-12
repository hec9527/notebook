import 'package:characters/characters.dart';

void main() {
  // int a = int(1);
  var pi = 3.1415726;

  print(double.parse(pi.toStringAsFixed(2).toString()));

  var name = '';

  var num = 0 / 0;

  if (num.isNaN) {
    print('nan');
  }

  name = '我在北京🇨🇳';

  print(name[name.length - 1]);
  print(name.characters.last);

  // print(nam)
  // if (bool.parse(name)) {
  //   print('is not empty');
  // }

  ({double x, double y, double z}) record = (x: 1, y: 2, z: 3);
  print(record.z + record.y + record.z);

  var vel = (10, 20);

  (int, int) swap((int, int) point) {
    final (a, b) = point;
    return (b, a);
  }

  var vel1 = swap(vel);
  print("${vel1.$1}, ${vel1.$2}");

  // print()

  final json = <String, dynamic>{
    'name': 'Dash',
    'age': 10,
    'color': 'blue',
  };

  // ({String name, int age}) userInfo(Map<String, dynamic> json) {
  //   return ({name: json['name'], age: json['age']} as ({String name, int age}));
  // }

  // // ···
  // // Destructures using a record pattern with named fields:
  // final (:name, :age) = userInfo(json);
}
