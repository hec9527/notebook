late String lateName;

void main() {
  var name = 'saga';

  Object name1 = {
    "name": "saga",
    "age": 22,
  };

  name1 = 123;

  name1 = 'hello word';

  print(name);

  print(name1);

  int? nullAble;

  if (nullAble == 1) {
    // print('null');
    nullAble = 2;
  }

  assert(nullAble == null);

  lateName = 'hell';

  print(lateName);

  var foo = const [];
  final bar = const [];
  const baz = []; // Equivalent to `const []`

  foo = [1, 2, 3, 4];
}
