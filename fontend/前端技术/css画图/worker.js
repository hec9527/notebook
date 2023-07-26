onmessage = function (e) {
  console.log('web worker 收到消息:', e.data);
  const sliceNo = e.data.sliceNo;
  const data = e.data.data;
  const width = e.data.width;
  const begin = e.data.begin;
  const points = [];

  for (let i = 0; i < data.length; i += 4) {
    const y = ((i + begin) / 4 / width) | 0;
    const x = (begin + i - y * width * 4) / 4;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    points.push(`${x}px ${y}px rgb(${r}, ${g}, ${b})`);
  }

  postMessage({ sliceNo, data: points });
};
