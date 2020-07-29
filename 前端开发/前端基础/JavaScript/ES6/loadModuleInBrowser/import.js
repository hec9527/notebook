import t, { Person, num, str } from './export.js';
// 如果直接在本地运行JS需要给浏览器增加启动参数   --allow-file-access-from-files

console.log(t, num, str);

const p = new Person();
console.log(p);
