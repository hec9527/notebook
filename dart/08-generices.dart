void main() {
  T first<T>(List<T> list) {
    T tepm = list[0];
    return list[0];
  }

  print(first([1, 2, 3, 4, 5, 6]));

  const a = 'a';
  const b = 'b';
  var obj = [a, b];

  switch (obj) {
    // List pattern [a, b] matches obj first if obj is a list with two fields,
    // then if its fields match the constant subpatterns 'a' and 'b'.
    case [a, b]:
      print('$a, $b');
  }

  var pair = (1, 2);

  switch (pair) {
    case (int a, int b):
      if (a > b) print('First element greater');
    // If false, prints nothing and exits the switch.
    case (int a, int b) when a > b:
      // If false, prints nothing but proceeds to next case.
      print('First element greater');
    case (int a, int b):
      print('First element not greater');
  }
}
