# Jest 测试

## 配置

如果使用 `ts` 需要依赖 `babel` 和 `ts-jest`, 依赖如下：

- `@babel/core`
- `@babel/preset-env`
- `@babel/preset-typescript`
- `@types/jest`
- `babel-jest`
- `jest`
- `ts-jest`
- `ts-node`
- `typescript`

使用 `jest --init` 快速创建配置文件

添加`.babelrc`配置文件

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-typescript"]
}
```
