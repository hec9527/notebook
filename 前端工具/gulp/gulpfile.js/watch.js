const { watch } = require('gulp');

// 所有事件都将被监控
watch('gulp/**/*.scss', { events: 'all' }, function (cb) {
    // body omitted
    console.log('文件改动');
    cb();
});
