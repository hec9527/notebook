const { program, Command } = require('commander');
const fs = require('fs');

// const json = fs.readFileSync(__dirname, 'package.json');
const version = '2.3.1';

const progress = new Command();

// progress
//     .version(version)
//     // .command('v', 'Show version')
//     .option('-v', '--version')
//     .action(() => {
//         console.log(`%cversion: ${version}`, 'color: #abf');
//     });

// progress.parse(process.argv);

program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

if (program.debug) console.log(program.opts());
console.log('pizza details:');
if (program.small) console.log('- small pizza size');
if (program.pizzaType) console.log(`- ${program.pizzaType}`);
