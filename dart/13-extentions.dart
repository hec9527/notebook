extension MyFoo on num {
  String toMyString() {
    return "hello, my string: $this";
  }
}

void main() {
  print(1.toMyString());
}
