self.importScripts('https://cdn.jsdelivr.net/npm/js-md5@0.8.3/src/md5.min.js');

this.addEventListener('message', e => {
  const data = e.data;
  const reader = new FileReader();

  reader.readAsText(data.blob);
  reader.addEventListener('load', event => {
    const hash = md5(event.target.result);
    this.postMessage({ hash });
  });
});
