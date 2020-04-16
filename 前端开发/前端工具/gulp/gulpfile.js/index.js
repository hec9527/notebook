const { watch } = require('gulp');

function tasks(cb) {
    console.log('hello world');
    cb();
}

function watchFile(cb) {
    // 所有事件都将被监控
    watch('gulp/**/*.scss', { events: 'all' }, function (cb) {
        // body omitted
        console.log('文件改动');
        cb();
    });
}

exports.default = watchFile;
