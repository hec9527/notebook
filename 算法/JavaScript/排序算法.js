/**
 * JS 十大排序算法
 */



/**
 * 1.冒泡排序算法
 * 最好 o(n)
 * 最差 o(n^2)
 * 平均 o(n^2)
 */
//  1.1单项冒泡排序
function bubbuleSort(nums) {
    for (let i = 0, len = nums.length - 1; i < len; i++) {
        // 标记是否以及排序完成 
        let flag = true;
        for (let j = 0; j < len - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                flag = false;
            }
        }
        if (flag) return nums
    }
}

// 1.2双向冒泡排序
function bubbuleSort_doubleWay(nums) {
    let left = 0;
    let len = nums.length - 1;
    let right = len;
    while (left < right) {
        let flag = true;
        // 将最大值放到最后
        for (let i = left; i < right; i++) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums];
                flag = false;
            }
        }
        right--; // 找到最大值，需要排序的区域-1
        // 将最小值放在左边
        for (let i = right; i > left; i--) {
            if (nums[i] < nums[i - 1]) {
                [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
                flag = false;
            }
        }
        left++;
        if (flag) return
    }
}

/**
 * 2.选择排序
 * 和冒泡排序相似，冒泡排序是每个元素和后面的一个元素比较
 * 选择排序是当前元素和后面的每一个元素比较
 * 最好 o(n ^ 2)
 * 最差 o(n ^ 2)
 * 平均 o(n ^ 2)
 */
function selectSort(nums) {
    for (let i = 0, len = nums.length - 1; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
}

/**
 * 3.插入排序
 * 最好： O(n)， 原数组已经是升序的。
 * 最坏： O(n²)
 * 平均： O(n²)
 */
function insertSort(nums) {
    for (let i = 1, len = nums.length; i < len; i++) {
        let temp = nums[i];
        let j = i;
        // 当前的值比前面的小，则将前面所有比这个值小的往后移一位
        // 并且将当前值赋值给最后一个比当前大的位置
        while (j >= 0 && temp < nums[j - 1]) {
            nums[j] = nums[j - 1];
            j--;
        }
        nums[j] = temp;
    }
}

/**
 * 4.快速排序
 * 快速排序设定一个基准点
 * 在左边找一个大于基准点的，如果不存在则交换的时候右侧的和基准点交换
 * 在右边找一个小于基准点的，如果不存在则交换的时候左侧的和基准点交换
 * 交换左右两个数，当左右两个标记重合则递归处理
 * 最好： O(n * logn)， 所有数均匀分布在基数的两边， 此时的递归就是不断地二分左右序列
 * 最坏： O(n²)， 所有数都分布在基数的一边， 此时划分左右序列就相当于是插入排序。
 * 平均： O(n * logn)
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    //如果左边的索引大于等于右边的索引说明整理完毕
    if (left >= right) return
    let i = left;
    let j = right;
    const base = arr[j] // 取无序数组最后一个数为基准值
    while (i < j) {
        //把所有比基准值小的数放在左边，大的数放在右边
        while (i < j && arr[i] <= base) { //找到一个比基准值大的数交换
            i++
        }
        // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
        arr[j] = arr[i]
        while (j > i && arr[j] >= base) { //找到一个比基准值小的数交换
            j--
        }
        // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
        arr[i] = arr[j]
    }
    arr[j] = base // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
    // 将左边的无序数组重复上面的操作  
    quickSort(arr, left, j - 1)
    // 将右边的无序数组重复上面的操作
    quickSort(arr, j + 1, right)
}

/**
 * 5.快速排序之填坑
 */
function quickSort(nums) {
    // 递归排序基数左右两边的序列
    function recursive(arr, left, right) {
        if (left >= right) return;
        let index = partition(arr, left, right);
        recursive(arr, left, index - 1);
        recursive(arr, index + 1, right);
        return arr;
    }
    // 将小于基数的数放到基数左边，大于基数的数放到基数右边，并返回基数的位置
    function partition(arr, left, right) {
        // 取第一个数为基数
        let temp = arr[left];
        while (left < right) {
            while (left < right && arr[right] >= temp) right--;
            arr[left] = arr[right];
            while (left < right && arr[left] < temp) left++;
            arr[right] = arr[left];
        }
        // 修改基数的位置
        arr[left] = temp;
        return left;
    }
    recursive(nums, 0, nums.length - 1);
}
/**
 * 6.快速排序之交换排序算法
 */
function quickSort1(nums) {
    function recursive(arr, left, right) {
        if (left >= right) return;
        let index = partition(arr, left, right);
        recursive(arr, left, index - 1);
        recursive(arr, index + 1, right);
        return arr;
    }

    function partition(arr, left, right) {
        let temp = arr[left];
        let p = left + 1;
        let q = right;
        while (p <= q) {
            while (p <= q && arr[p] < temp) p++;
            while (p <= q && arr[q] > temp) q--;
            if (p <= q) {
                [arr[p], arr[q]] = [arr[q], arr[p]];
                // 交换值后两边各向中间推进一位
                p++;
                q--;
            }
        }
        // 修改基数的位置
        [arr[left], arr[q]] = [arr[q], arr[left]];
        return q;
    }
    recursive(nums, 0, nums.length - 1);
}
/**
 * 7.归并排序算法
 * 最好： O(n * logn)
 * 最坏： O(n * logn)
 * 平均： O(n * logn)
 */
function mergeSort(nums) {
    // 有序合并两个数组
    function merge(l1, r1, l2, r2) {
        let arr = [];
        let index = 0;
        let i = l1,
            j = l2;
        while (i <= r1 && j <= r2) {
            arr[index++] = nums[i] < nums[j] ? nums[i++] : nums[j++];
        }
        while (i <= r1) arr[index++] = nums[i++];
        while (j <= r2) arr[index++] = nums[j++];
        // 将有序合并后的数组修改回原数组
        for (let t = 0; t < index; t++) {
            nums[l1 + t] = arr[t];
        }
    }
    // 递归将数组分为两个序列
    function recursive(left, right) {
        if (left >= right) return;
        // 比起(left+right)/2，更推荐下面这种写法，可以避免数溢出
        let mid = parseInt((right - left) / 2) + left;
        recursive(left, mid);
        recursive(mid + 1, right);
        merge(left, mid, mid + 1, right);
        return nums;
    }
    recursive(0, nums.length - 1);
}

/**
 * 8.桶排序算法
 * 最好： O(n)， 每个数都在分布在一个桶里，
 * 最坏： O(n²)， 所有的数都分布在一个桶里。
 * 平均： O(n + k)， k表示桶的个数。
 */
function bucketSort(nums) {
    // 桶的个数，只要是正数即可
    let num = 5;
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    // 计算每个桶存放的数值范围，至少为1，
    let range = Math.ceil((max - min) / num) || 1;
    // 创建二维数组，第一维表示第几个桶，第二维表示该桶里存放的数
    let arr = Array.from(Array(num)).map(() => Array().fill(0));
    nums.forEach(val => {
        // 计算元素应该分布在哪个桶
        let index = parseInt((val - min) / range);
        // 防止index越界，例如当[5,1,1,2,0,0]时index会出现5
        index = index >= num ? num - 1 : index;
        let temp = arr[index];
        // 插入排序，将元素有序插入到桶中
        let j = temp.length - 1;
        while (j >= 0 && val < temp[j]) {
            temp[j + 1] = temp[j];
            j--;
        }
        temp[j + 1] = val;
    })
    // 修改回原数组
    let res = [].concat.apply([], arr);
    nums.forEach((val, i) => {
        nums[i] = res[i];
    })
}
/**
 * 9.基数排序算法
 * 参考python版本优化
 */
function radixSort(nums) {
    // 计算位数
    function getDigits(n) {
        let sum = 0;
        while (n) {
            sum++;
            n = parseInt(n / 10);
        }
        return sum;
    }
    // 第一维表示位数即0-9，第二维表示里面存放的值
    let arr = Array.from(Array(10)).map(() => Array());
    let max = Math.max(...nums);
    let maxDigits = getDigits(max);
    for (let i = 0, len = nums.length; i < len; i++) {
        // 用0把每一个数都填充成相同的位数
        nums[i] = (nums[i] + '').padStart(maxDigits, 0);
        // 先根据个位数把每一个数放到相应的桶里
        let temp = nums[i][nums[i].length - 1];
        arr[temp].push(nums[i]);
    }
    // 循环判断每个位数
    for (let i = maxDigits - 2; i >= 0; i--) {
        // 循环每一个桶
        for (let j = 0; j <= 9; j++) {
            let temp = arr[j]
            let len = temp.length;
            // 根据当前的位数i把桶里的数放到相应的桶里
            while (len--) {
                let str = temp[0];
                temp.shift();
                arr[str[i]].push(str);
            }
        }
    }
    // 修改回原数组
    let res = [].concat.apply([], arr);
    nums.forEach((val, index) => {
        nums[index] = +res[index];
    })
}
/**
 * 10.计数排序
 * 以数组元素值为键， 出现次数为值存进一个临时数组， 最后再遍历这个临时数组还原回原数组。
 * 因为 JavaScript 的数组下标是以字符串形式存储的， 所以计数排序可以用来排列负数
 * 但不可以排列小数。
 * 最好： O(n + k)， k是最大值和最小值的差。
 * 最坏： O(n + k)
 * 平均： O(n + k)
 */


/**
 * 计算排序优化
 * 把每一个数组元素都加上 min 的相反数， 来避免特殊情况下的空间浪费， 
 * 通过这种优化可以把所开的空间大小从 max + 1 降低为 max - min + 1， max 和 min 分别为数组中的最大值和最小值。
 * 比如数组[103, 102, 101, 100]， 普通的计数排序需要开一个长度为 104 的数组， 
 * 而且前面 100 个值都是 undefined， 使用该优化方法后可以只开一个长度为 4 的数组。
 */

/**
 * 11.堆排序
 * 根据数组建立一个堆（ 类似完全二叉树）， 每个结点的值都大于左右结点（ 最大堆， 通常用于升序）， 
 * 或小于左右结点（ 最小堆， 通常用于降序）。 对于升序排序， 先构建最大堆后， 交换堆顶元素（ 表示最大值） 和堆底元素， 
 * 每一次交换都能得到未有序序列的最大值。 重新调整最大堆， 再交换堆顶元素和堆底元素， 重复 n - 1 次后就能得到一个升序的数组。
 */
function heapSort(nums) {
    // 调整最大堆，使index的值大于左右节点
    function adjustHeap(nums, index, size) {
        // 交换后可能会破坏堆结构，需要循环使得每一个父节点都大于左右结点
        while (true) {
            let max = index;
            let left = index * 2 + 1; // 左节点
            let right = index * 2 + 2; // 右节点
            if (left < size && nums[max] < nums[left]) max = left;
            if (right < size && nums[max] < nums[right]) max = right;
            // 如果左右结点大于当前的结点则交换，并再循环一遍判断交换后的左右结点位置是否破坏了堆结构（比左右结点小了）
            if (index !== max) {
                [nums[index], nums[max]] = [nums[max], nums[index]];
                index = max;
            } else {
                break;
            }
        }
    }
    // 建立最大堆
    function buildHeap(nums) {
        // 注意这里的头节点是从0开始的，所以最后一个非叶子结点是 parseInt(nums.length/2)-1
        let start = parseInt(nums.length / 2) - 1;
        let size = nums.length;
        // 从最后一个非叶子结点开始调整，直至堆顶。
        for (let i = start; i >= 0; i--) {
            adjustHeap(nums, i, size);
        }
    }

    buildHeap(nums);
    // 循环n-1次，每次循环后交换堆顶元素和堆底元素并重新调整堆结构
    for (let i = nums.length - 1; i > 0; i--) {
        [nums[i], nums[0]] = [nums[0], nums[i]];
        adjustHeap(nums, 0, i);
    }
}

/**
 * 12.希尔排序
 * 通过某个增量 gap， 将整个序列分给若干组， 从后往前进行组内成员的比较和交换， 随后逐步缩小增量至 1。 
 * 希尔排序类似于插入排序， 只是一开始向前移动的步数从 1 变成了 gap。
 * 最好： O(n * logn)， 步长不断二分。
 * 最坏： O(n * logn)
 * 平均： O(n * logn)
 */

function shellSort(nums) {
    let len = nums.length;
    // 初始步数
    let gap = parseInt(len / 2);
    // 逐渐缩小步数
    while (gap) {
        // 从第gap个元素开始遍历
        for (let i = gap; i < len; i++) {
            // 逐步其和前面其他的组成员进行比较和交换
            for (let j = i - gap; j >= 0; j -= gap) {
                if (nums[j] > nums[j + gap]) {
                    [nums[j], nums[j + gap]] = [nums[j + gap], nums[j]];
                } else {
                    break;
                }
            }
        }
        gap = parseInt(gap / 2);
    }
}