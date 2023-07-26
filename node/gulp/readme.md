# gulp

## gulpfile

在项目根目录添加 `gulpfile.js` 来配工作流，也可以创建一个名为`gulpfile.js`的文件夹，并在其中创建`index.js`。当然也可以使用`typescript`，安装`typescript`以及`ts-node`依赖后，将`gulpfile.js`更名为`gulpfile.ts`

## task

`gulpfile`中导出的`task`被认为是公共的，可以通过`gulp`命令运行，没有被导出的`task`被认为是私有的，不能通过`gulp`命令运行。公共的`task`可以通过`gulp <task>`来运行

gulp提供了`series`、`parallel`来组合task使之串行、并行执行，组合可以嵌套

