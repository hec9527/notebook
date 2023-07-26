import ora from 'ora';

// const spinner = ora({
//   text: 'loading file',
//   indent: 2,
// }).start();

// const spinner1 = ora({
//   text: 'loading file1',
//   indent: 2,
// }).start();

const spinner2 = ora({
  text: 'loading file2',
  indent: 2,
  color: 'blue',
  interval: '50',
  prefixText: 'spin',
}).start();

// setTimeout(() => {
//   spinner.succeed();
// }, 1000);

// setTimeout(() => spinner1.fail(), 1400);

setTimeout(() => {
  spinner2.info('spin success');
}, 1000);
