self.onmessage = (e) => {
    const data = e.data.num;
    const del = (num) => {
        return num > 1 ? num * del(num - 1) : 1;
    };
    const result = del(data);
    setTimeout(() => {
        self.postMessage(result);
    }, Math.random() * 1000 + 1000);
};

self.onclose = () => {
    console.log('关闭worker：', self.name);
};
