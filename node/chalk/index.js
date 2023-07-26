import chalk from 'chalk';
import figlet from 'figlet';
const log = console.log;

// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));

// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// // Nest styles of the same type even (color, underline, background)
// log(
//   chalk.green(
//     'I am a green line ' +
//       chalk.blue.underline.bold('with a blue substring') +
//       ' that becomes green again!'
//   )
// );

// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// // Use RGB colors in terminal emulators that support it.
// log(chalk.keyword('orange')('Yay for orange colored text!'));
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));

// log(chalk.hex('#f67').bold('Bold pink!'));

// log(chalk.keyword('pink').underline.bold('hello world'));

figlet('pico', (error, result) => {
  if (!result) return;
  const arr = result.split('\n');
  const padding = 25;
  const maxLen = arr.reduce((p, c) => (p?.length > c.length ? p : c)).length;

  log(chalk.hex('#f67').bold('+' + '-'.repeat(padding * 2 + maxLen - 2) + '+'));
  arr.forEach(str => {
    log(
      chalk
        .hex('#f67')
        .bold(
          '|' + ' '.repeat(padding - 1) + str + ' '.repeat(padding - 1) + '|'
        )
    );
  });
  log(chalk.hex('#f67').bold('+' + '-'.repeat(padding * 2 + maxLen - 2) + '+'));
});
