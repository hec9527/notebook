/**
 * 使用链表实现 最近最少缓存淘汰算法
 *  1. 未满时直接插入到头部
 *  2. 已满时，删除尾部插入的头部
 *  3. 读取时，从头部读取，读取到后删除该节点并且存放到头部
 */
class LRULink<T extends DataNode<any> = DataNode<any>> {
  private head: T | null = null;
  private size = 0;

  constructor(private maxSize: number = 8) {}

  public getSize() {
    return this.size;
  }
  public isEmpty() {
    return this.size === 0;
  }
  public isFull() {
    return this.size === this.maxSize;
  }

  public addNode(node: T) {
    // 直接插入头部
    node.next = this.head;
    this.head = node;
    this.size++;

    // 超出后尾部删除
    if (this.size > this.maxSize) {
      let pre: DataNode<any> | null = null;
      let p: DataNode<any> = this.head;
      while (p.next) {
        pre = p;
        p = p.next;
      }
      if (pre) {
        pre.next = null;
        this.size--;
      }
    }
  }

  public getNode(node: T) {
    if (!this.head) return null;
    if (node.data === this.head.data) return this.head;
    // 遍历获取元素
    let pre = this.head as DataNode<any>;
    let p: DataNode<any> | null = this.head;
    do {
      if (p!.data === node.data) {
        pre.next = p.next;
        p.next = this.head;
        this.head = p as any;
        return this.head;
      }
      pre = p;
      p = p?.next;
    } while (p?.next);
    return null;
  }

  public toString() {
    if (!this.head) return '';
    const arr = [];
    let p: DataNode<any> | null = this.head;
    do {
      arr.push(p.data);
    } while ((p = p.next));
    return arr.toString();
  }
}

class DataNode<T extends any> {
  constructor(public data: T, public next: DataNode<T> | null = null) {}
}

const myLink = new LRULink(13);
for (let i = 1; i <= 15; i++) {
  myLink.addNode(new DataNode(i));
  //   console.log({ size: myLink.getSize(), isEmpty: myLink.isEmpty(), isFull: myLink.isFull(), values: myLink.toString() });
}

console.log(myLink.toString());

console.log(myLink.getNode(new DataNode(15)), '\n', myLink.toString());
console.log(myLink.getNode(new DataNode(7)), '\n', myLink.toString());
console.log(myLink.getNode(new DataNode(15)), '\n', myLink.toString());
console.log(myLink.getNode(new DataNode(2)), '\n', myLink.toString());

export default null;
