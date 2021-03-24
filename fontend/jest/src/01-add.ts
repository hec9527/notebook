export function add(a: number, b: number) {
  return a + b;
}

export function fibonacci(num: number): number {
  if (num === 0) {
    return num;
  } else {
    return fibonacci(num - 1) + num;
  }
}

export function forEach<T = any>(arr: T[], callback: (item: T, index: number, arr: T[]) => void) {
  for (let index = 0; index < arr.length; index++) {
    callback(arr[index], index, arr);
  }
}

export function fetchInfo(): Promise<any> {
  return fetch('http:xxxx.xx/xxx/xxx/xxx.do');
}
