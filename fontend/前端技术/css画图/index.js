const msg = document.getElementById('msg');
const pp = document.getElementById('ctx');
const refer = document.getElementById('img');

function imageToCssImage(img) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const w = 600;
  const h = (img.height / img.width) * w;
  let points = [];

  refer.src = img.src;
  refer.style.width = w + 'px';

  canvas.width = w;
  canvas.height = h;

  ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);

  const data = Array.from(ctx.getImageData(0, 0, canvas.width, canvas.height).data);
  const len = data.length;
  const step = w * 50 * 4;
  let slice = 0;

  for (let i = 0; i < len; i += step, slice++) {
    const _data = data.slice(i, i + step);
    const worker = new Worker('./worker.js');

    worker.postMessage({ sliceNo: slice, data: _data, width: w, begin: slice * step });
    worker.onmessage = function (e) {
      console.log('主线程消息', e.data);
      const { sliceNo, data } = e.data;
      points[sliceNo] = data;
      msg.innerHTML = `处理进度：${points.length} / ${slice}`;

      // over
      if (points.filter(Boolean).length == slice) {
        msg.innerHTML = '处理进度： 已完成';
        const _points = points.flat();
        console.log(_points.length, _points);
        pp.style.boxShadow = _points.join(',');
      }
    };
  }
}

document.getElementById('file').addEventListener('change', e => {
  console.log(e.target.files[0]);
  const img = document.createElement('img');
  img.onload = imageToCssImage.bind(undefined, img);
  img.src = URL.createObjectURL(e.target.files[0]);
});
