/**
 * 乱序算法，打乱数组的顺序
 * 特性：
 *    1， 公平，每个元素出现在每个位置上的概率都是一样的
 *    2， 快速，只遍历一次
 *    3， 原地，不需要额外的空间
 */
function Shuffle(arr = []) {
    for (let i = arr.length - 1; i >= 0; i--) {
        // const randomIndex = (Math.random() * i) | 0;
        const randomIndex = ~~(Math.random() * i);
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
