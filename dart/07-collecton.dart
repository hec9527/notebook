void main() {
  var list = [1, 2, 3, 4, 5, 6, 7];
  list.add(34);
  list.addAll([11, 12, 13, 14, 15]);
  print(list);

  var set1 = <num>{1, 2, 3, 4, 5, 6, 7};
  print(set1);
  print(set1.length);

  set1 = list.toSet();

  final finalSet = const <num>{1, 2, 3, 4, 5, 6, 7};
  // finalSet.add(12);
  print(finalSet);

  final set2 = {99, ...set1};
  print(set2);

  var map1 = Map<String, num>();
  map1['name'] = 12;
  map1['age'] = 13;

  var map2 = {...map1, 'addr': 13};
  print(map2);

//   var nav = [
//     'Home',
//     'Furniture',
//     'Plants',
//     if (login case 'Manager') 'Inventory'
//   ];

  var list2 = [
    '#999',
    for (final i in list)
      // if (i % 2 == 0) '#$i'
      if (i >= 10) '#$i'
  ];

  print(list2);
}
