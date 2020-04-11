/**
 * nodejs  index.js
 */
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const pwd = path.dirname(__filename);
const html = path.join(pwd, './index.html');

// 打开客户端文件
if (fs.statSync(html).isFile()) {
    spawn(`open`, [`${html}`]);
} else {
    console.error('指定客户端index.html文件不存在');
}

// 引入服务端文件
const serve = require('./server');
