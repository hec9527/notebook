/**
 * 采用 module 或者 namespace 可以 导出类型
 */

namespace H {
  export class A {
    name = 'saga';
  }
}

// * import的用法就很骚
import P = H.A;

const p = new P();

console.log(p.name);
