# npm script

## 脚本基础

- 在`package.json`里面添加`script`字段，里面的每一个属性对应一段脚本

- 每次执行脚本都会新建一个shell，并且临时将当前目录`/node_modules/.bin/`子目录添加到PATH环境变量

- 在`package.json`中可以添加通配符匹配文件：
  - `*`表示任意文件名， `**`表示任意一层目录
  - 通配符可以使用转义字符防止被转义`\*`

```json
    "script": {
        "lint": "jslint *.js",
        "lintAll": "jslint **/*.js"
    }
```

## 传参

- 向npm脚本添加参数需要使用`--`

```json
    "script": {
        "lint:checkstyle": "npm run lint -- --reporter checkstyle > checkstyle.xml"
    }
```

## 执行顺序

- 如果脚本并发执行可以使用 `&`

```json
    "script": {
        "dev": "npm run script1.js & npm run script2.js"
    }
```

- 如果脚本顺序执行（前面一个脚本执行完成才能继续执行后面的脚本）,可以使用`&&`操作符

```json
    "script": {
        "dev": "npm run script1.js && npm run script2.js"
    }
```

## 默认值

- npm提供了两个默认值

```json
    "script": {
        "start": "node server.js",
        "install": "node-gyp rebuild"
    }
```

- 使用这两个脚本的前提是：在根目录存在这两个文件

## 钩子

- Npm提供默认的钩子
  - prepublish，postpublish
  - preinstall，postinstall
  - preuninstall，postuninstall
  - preversion，postversion
  - pretest，posttest
  - prestop，poststop
  - prestart，poststart
  - prerestart，postrestart

- 脚本钩子实现类似于

```json
    "script": {
        "test": "node pretest.js && node test.js && node posttest.js && exit 0"
    }
```

## 简写命令

| 简写形式      | 原始命令          |
| :------------ | :---------------- |
| `npm start`   | `npm run start`   |
| `npm stop`    | `npm run stop`    |
| `npm test`    | `npm run test`    |
| `npm restart` | `npm run restart` |

## 常用脚本实例

```json
// 删除目录
"clean": "rimraf dist/*",

// 本地搭建一个 HTTP 服务
"serve": "http-server -p 9090 dist/",

// 打开浏览器
"open:dev": "opener http://localhost:9090",

// 实时刷新
 "livereload": "live-reload --port 9091 dist/",

// 构建 HTML 文件
"build:html": "jade index.jade > dist/index.html",

// 只要 CSS 文件有变动，就重新执行构建
"watch:css": "watch 'npm run build:css' assets/styles/",

// 只要 HTML 文件有变动，就重新执行构建
"watch:html": "watch 'npm run build:html' assets/html",

// 部署到 Amazon S3
"deploy:prod": "s3-cli sync ./dist/ s3://example-com/prod-site/",

// 构建 favicon
"build:favicon": "node scripts/favicon.js",
```
