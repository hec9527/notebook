'use strict';

/**
 * sort 函数默认采用 ASCII 码排序，
 * 数字0-9的 ASCII 码为 48-57
 * 字母A-Z的 ASCII 码为 65-90
 * 字母a-z的 ASCII 码为 97-122
 */

const arrStr = [
    '3',
    2,
    'a',
    'ad',
    'ab',
    'ac',
    '9',
    '0',
    31,
    '4',
    'A',
    'aC',
    'B',
    'CA',
];
console.log(arrStr.sort());

/**
 * sort自定义排序
 * 需要传递一个回调函数
 * a-b>0 升序
 * a-b<0 降序
 * a-b=0
 */
const arr = [1, 4, 2, 5, 7, 3, 9, 0, -3, -2, -2.2, -0, +0];
console.log(
    '升序',
    arr.sort((a, b) => a - b)
);

console.log(
    '降序',
    arr.sort((a, b) => b - a)
);
