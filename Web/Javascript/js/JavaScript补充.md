# JavaScript补充

1. 使用`for`循环遍历数据时，缓存数组的长度，可以提高三倍以上的性能

2. JavaScript当中数组遍历的效率(简单遍历1000w次的结果)
| 遍历方式          | 消耗时间 |
| ----------------- | -------- |
| for / while       | 30ms     |
| for不缓存数组长度 | 118ms    |
| reduce            | 126ms    |
| forEach           | 152ms    |
| for of            | 160ms    |
| every / some      | 176ms    |
| map               | 215ms    |
| for in            | 29343ms  |



