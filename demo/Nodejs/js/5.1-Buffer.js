


// 设置一个缓冲区并且全部重置为0 
buff = Buffer.alloc(10);
console.log(buff);


// 设置一个缓冲区，但是不清除原来内存区域的数据
buff1 = Buffer.allocUnsafe(10);
console.log(buff1);

// 从指定字符串生成buffer
str = '爱我中华！';
buff2 = Buffer.from(str);
console.log(buff2);

