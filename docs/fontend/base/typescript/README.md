# TypeScript

- TypeScript 不能直接运行，需要安装相应的运行环境

```shell
npm i -g typescript
```

## 项目初始化

- 初始化

```shell
tsc --init
# 生成的 tsconfig.json 中可以使用注释
```

## 注解

- 在函数的参数列表中使用注解，可以限制传递的参数的类型，如果函数调用时给定的参数类型不匹配则提示错误

```ts
foo(name:string,age:number){
    // do something
}
```

- 如果在函数的参数中不使用注解，则会发出警告：程序可能不会按照预期进行

## TypeScript 中数据类型

- 布尔值 `boolean`
- 数字 `number`
- 字符串 `string`
- 数组 `arrary`
  - `let arr: number[]` 单类型
  - `let arr: (string | number)[]` 多种类型
  - `let arr: Arrary<number>` 泛型
- 元组 `tuple`
  - `let tuple: [string, number]`
- 枚举 `enum`
  - `let c:Color = Color.Green`
- 任意类型 `any`
- 对象类型 `object`
- 空值 `void`
  - 只能赋值 `undefined`一般用于函数返回值
- `null`、`undefined`类型
  - 它们是所有类型的子类型，可以赋值给其它类型
  - `--strictNullChecks`标记，使得它们只能赋值给自己或者 `void`
- `Never`
  - 永不存在的值的类型
  - 返回 never 类型的函数必须存在不可达到的终点

## 类型断言

- 使用尖括号`<arrary>arr.length`
- 使用`as`关键字`(arr as array).length`
- 只在编译阶段检查，运行时没有影响

## 接口

### `鸭式辨型法`

- 接口定了数据的形式，只要满足接口的数据形式，就属于这种数据类型

```ts
interface People {
  name: string;
  age: number;
}
// 所有包含 string 类型的 name 属性，以及 number 类型的 age 属性 的对象，都是People接口的事例
```

#### 可选属性

- 属性名后添加`?`，表示可选属性，对象类型检查的时候不会检查该属性

#### 只读属性

- 属性名前面使用 `readonly` 修饰，对象创立之后这个属性不能被更改
- `ReadonlyArray<T>`类型和`Array<T>`类型相似，但是不能修改
  - 可以使用断言，确定为其它类型数组
- `const` ? `readonly`
  - 变量使用`const`，属性使用`readonly`

#### 函数类型

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
// 函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
```

#### 可索引的类型

- 可索引类型具有一个索引签名，它描述了对象索引的类型
- 索引签名具有 2 种类型，数字和字符串
- 同时使用两种类型的索引，数字索引的返回值必须是字符串索引返回值类型的子类型

```ts
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```
