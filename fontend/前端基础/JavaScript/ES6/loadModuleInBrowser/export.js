export const num = 1024;
export const str = 'hello word';

export default {
    str: '默认导出对象',
    str1: '无需知道属性名，导入时随便给一个名字'
};

export class Person {
    constructor() {
        this.name = 'tom';
    }
}
