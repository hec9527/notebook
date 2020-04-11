# TypeScript

- TypeScript 不能直接运行，需要安装相应的运行环境

```shell
    npm i -g typescript
```

## 注解

- 在函数的参数列表中使用注解，可以限制传递的参数的类型，如果函数调用时给定的参数类型不匹配则提示错误

```ts
    foo(name:string,age:number){
        // do something
    }
```

- 如果在函数的参数中不使用注解，则会发出警告：程序可能不会按照预期进行
