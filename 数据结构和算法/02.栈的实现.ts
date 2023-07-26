/**
 * 栈是一种先进后出的数据结构，只有两种操作方式，入栈和出栈
 *
 * 栈可以理解为一种操作受限的线性表
 */
class Stack<T extends any> {
  private head: DataNode<T> | null = null;
  private size = 0;

  constructor(private maxSize: number = 8) {}

  public push(node: DataNode<T>) {
    if (this.size >= this.maxSize) {
      throw new Error(`stack overflow, current size ${this.size} over the max ${this.maxSize}`);
    }
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  public pop() {
    const node = this.head;
    if (this.head) {
      this.head = this.head.next;
      this.size--;
    }
    return node;
  }

  public getSize() {
    return this.size;
  }

  public toString() {
    const arr = [];
    let p = this.head;
    while (p) {
      arr.push(p.data);
      p = p.next;
    }
    return arr.toString();
  }
}

class DataNode<T extends any> {
  constructor(public data: T, public next: DataNode<T> | null = null) {}
}

new DataNode(2);

const myStack = new Stack(55);

for (let i = 0; i < 15; i++) {
  myStack.push(new DataNode(i));
}
for (let i = 0; i < 15; i++) {
  if (Math.random() > 0.5) {
    console.log(`pop:${myStack.pop()?.data}__`, myStack.toString());
  }
}

export default null;
