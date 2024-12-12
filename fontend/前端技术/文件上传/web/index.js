const inp = document.querySelector('input');
const progress = document.querySelector('progress');
const progressDetail = document.querySelector('#progress-detail');

const TRUNK_SIZE = 0.5 * 1024 * 1024; // 0.5MB

/**
 * @param {File} file
 */
function sliceAndGetMd5(file) {
  let start = 0;
  let index = 0;
  const sliceArr = [];
  do {
    const end = start + start + TRUNK_SIZE;
    const slice = file.slice(start, end);
    sliceArr.push({
      blob: slice,
      md5: null,
      index: index,
      start,
      end,
      progress: 0,
    });
    start += TRUNK_SIZE;
    index += 1;
  } while (start < file.size);

  Promise.all(
    sliceArr.map(slice => {
      return new Promise(resolve => {
        const worker = new Worker('./md5-worker.js');
        const message = { blob: slice.blob };
        worker.postMessage(message);
        worker.onmessage = e => {
          slice.md5 = e.data.hash;
          worker.terminate();
          resolve();
        };
      });
    })
  ).then(() => {
    progressDetail.innerHTML = '';
    const concurrentTask = new ConcurrentTask(3);
    sliceArr.map(slice => {
      const progress = document.createElement('progress');
      progressDetail.appendChild(progress);

      concurrentTask.push(
        () =>
          new Promise(resolve => {
            const ajax = new XMLHttpRequest();
            ajax.open('POST', 'http://localhost:3099/upload', true);
            ajax.onreadystatechange = function () {
              if (ajax.readyState === ajax.DONE && ajax.status === 200) {
                console.log('finished');
              }
            };

            ajax.timeout = 60;
            // ajax.onprogress = function (e) {
            //   const per = (e.loaded / e.total) * 100;
            //   progress.value = per;
            //   if (per === 100) {
            //     resolve();
            //   }
            //   slice.progress = per;
            //   progress.value =
            //     sliceArr.reduce((acc, cur) => acc + cur.progress, 0) /
            //     sliceArr.length;
            // };

            const formData = new FormData();
            formData.append(
              'file',
              slice.blob,
              `${file.name}_slice_${slice.index}`
            );
            formData.append('md5', slice.md5);
            ajax.send(formData);
            // ajax.send({});
          })
      );
    });
  });
}

inp.addEventListener('change', e => {
  const file = e.target.files[0]; // 这里不允许多选
  sliceAndGetMd5(file);
});

class ConcurrentTask {
  maxTask = 3;

  tasks = [];
  runningTask = [];

  constructor(maxTask) {
    this.maxTask = maxTask;
  }

  push(task) {
    this.tasks.push(task);
    this.run();
  }

  run() {
    while (this.tasks.length && this.runningTask.length < this.maxTask) {
      const task = this.tasks.shift();
      this.runningTask.push(task);
      task().then(() => {
        this.runningTask.splice(this.runningTask.indexOf(task), 1);
      });
    }
  }
}
