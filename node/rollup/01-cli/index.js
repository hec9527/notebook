function add(x, y) {
  return a + y;
}

function reduce(x, y) {
  return x - y;
}

function multiplication(x, y) {
  return x * y;
}

function deliver(x, y) {
  return x / y;
}

function power(x, y) {
  return x ** y;
}

console.log(add(1, 2));
console.log(add(2, 3));

console.log(reduce(3, 2));

console.log(multiplication);

export { deliver };

export default add;
