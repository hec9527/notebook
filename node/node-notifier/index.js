const notifier = require('node-notifier');

// notify

// notifier.notify('hello, 这是一个来自于node的通知消息', (...args) => {
//   console.log(args);
// });

notifier.notify(
  {
    title: 'muse 发布失败',
    subtitle: '关键字匹配',
    message: '错粗错误错误',
    sound: true,
    actions: ['取消', '重发', '明白'],
    dropdownLabel: '更多',
  },
  (...args) => {
    console.log(args);
  }
);
