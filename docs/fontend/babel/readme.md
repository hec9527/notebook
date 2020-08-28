# babel

> 用于将 ES2015+的代码转换为指定版本的代码

## 核心内容 npm 包

```shell
npm i @babel/core @babel/cli @babel/preset-env @babel/polyfill -D
```

说明：

- `@babel/core`提供了语法转义的能力
- `@babel/cli`提供了在命令行中运行 babel 的能力
- `@babel/preset-env`提供了一系列的预设，使得不用单独配置需要转义的语法
- `@babel/polyfill` 为 babel 提供一系列的 JavaScript 新特性

> 使用 babel 需要在项目中创建名为 babel.config.js 的文件

```js
const presets = [
  [
    "@babel/env",
    {
      // babel只会为指定版本的浏览器中不存在的特性提供转义
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      // 需要安装 @babel/polyfill
      useBuiltIns: "usage",
    },
  ],
];
module.exports = { presets };
```

## babel 配置

```json
// .babelrc
{
  "presets": ["es2015", "react", "stage-2"],
  "plugins": []
}
```

### 插件参数

> 插件和 preset 都可以指定参数，参数由插件名和参数对象主城组成一个数组
>
> 上面核心内容中的 targets 就是参数名，后面是参数值

## 预设

### 官方预设

> babel 官方提供了很多的预，使用这些预设可以不用自己编写配置

- `@babel/preset-env`
- `@babel/preset-flow`
- `@babel/preset-react`
- `@babel/preset-typescript`

### stage-x

TC39 将提案分为几个阶段

- stage 0：设想
- stage 1：建议
- stage 2：草案
- stage 3：候选（**_在这之前的草案尽可能不要使用_**）
- stage 4：完成