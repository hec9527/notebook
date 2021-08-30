import figlet from 'figlet';
import chalk from 'chalk';

console.log(figlet.textSync('hello world'));

console.log(chalk.bgYellow.black(figlet.textSync('FEDTooLs')));

console.log(chalk.keyword('pink')(figlet.textSync('Talk is cheap,\n show me code!', { width: 80 })));
