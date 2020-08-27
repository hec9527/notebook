/// <reference path="./generic.ts" />
// 三斜线指令可以用来包含其他文件

namespace Game {
    export const isBegin = false;
    export interface People {
        name: string;
        age: number;
    }
    export function add(x: number, y: number): number {
        return x + y;
    }
    export class Person {
        constructor(name: string, private age: number) {}
    }
}

namespace Game {
    export function showMsg() {}
}

let people: Game.Person;
let person1: Game.Person;
Game.showMsg();

// 导出别名
export { Game as name };
