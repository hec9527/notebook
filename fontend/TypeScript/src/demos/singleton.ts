// Ts 单例模式
class SingleTon {
  private static instance: SingleTon | undefined;
  private name: string;
  private age: number;

  /** 单例模式的核心  ---- 构造函数私有化  */
  private constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public static getInstance(name: string, age: number): SingleTon {
    if (SingleTon.instance) {
      return SingleTon.instance;
    } else {
      return (SingleTon.instance = new SingleTon(name, age));
    }
  }
}

// const A = new SingleTon('张三', 32); // 无法直接调用

const B = SingleTon.getInstance('张三', 32);

const C = SingleTon.getInstance('李四', 34);

console.log(B);

console.log(C);

console.log(B === C);
