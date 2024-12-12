String mapStatus(int status) {
  return switch (status) {
    0 => "success",
    1 => "fail",
    2 => "error",
    _ => "unknown"
  };
}

void main() {
  // if switch  支持表达式
  // switch 表达式可以作为返回值

  print(mapStatus(2));
  print(mapStatus(3));
}
