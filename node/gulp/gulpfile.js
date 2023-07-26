const { series, parallel, src, watch, dest } = require('gulp');
const { EventEmitter } = require('events');
const { createReadStream } = require('fs');
const { spawn } = require('child_process');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');
const stream = require('stream');

function defaultTask(cb) {
  console.log('default task');
  cb();
}

function build(cb) {
  console.log('build');
  cb();
}

function lint(cb) {
  console.log('lint');
  cb();
}

function test(cb) {
  console.log('test');
  cb();
}

/** 返回流的task */
function streamRead() {
  console.log('stream');
  const readStream = createReadStream('./gulpfile.js');
  return readStream;
}

function streamSrc() {
  console.log('stream src');
  return src('./gulpfile.js');
}

function promise() {
  return new Promise(res => {
    console.log('promise task');
    setTimeout(res, 3000);
  });
}

function event() {
  console.log('EventEmitter');
  const e = new EventEmitter();
  setTimeout(() => e.emit('finish'), 3000);
  return e;
}

function clean(dir) {
  return function clean() {
    return del(dir);
  };
}

function destFile() {
  return src('./index.js')
    .pipe(dest('./dist'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('./dist'));
}

function cp() {
  const c = spawn('date');
  console.log('child_process');
  c.stdout.on('data', s => console.log(s.toString()));
  return c;
}

async function asyncFoo() {
  console.log('async function');
}

function watchTest() {
  return watch('./index.js', { ignoreInitial: false, delay: 500 }, destFile);
}

function streamNode() {
  console.log('node stream');
  return new stream.Readable({
    autoDestroy: true,
    highWaterMark: 1000,
    read(size) {
      this.push('123123123');
      this.push(null);
    },
  });
}

exports.build = build;
exports.streamSrc = streamSrc;
exports.streamRead = streamRead;
exports.streamNode = streamNode;
exports.promise = promise;
exports.event = event;
exports.cp = cp;
exports.watch = watchTest;
exports.dist = series(clean('dist'), destFile);
exports.async = asyncFoo;
exports.series = series(lint, test, build);
exports.parallel = parallel(lint, test, build);
module.exports.default = defaultTask;
