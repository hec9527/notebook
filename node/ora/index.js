import ora from 'ora';
import ss from 'child_process';

const spinner = ora({
  text: 'loading file',
  indent: 2,
}).start();

const spinner1 = ora({
  text: 'loading file1',
  indent: 2,
}).start();

const spinner2 = ora({
  text: 'loading file2',
  indent: 2,
}).start();

const spinner3 = ora({
  text: 'loading file2',
  indent: 2,
}).start();

setTimeout(() => {
  spinner.succeed();
}, 1000);

setTimeout(() => spinner1.fail(), 1400);
