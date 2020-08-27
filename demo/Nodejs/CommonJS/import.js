const a = require('./export');

console.log(a);
setTimeout(() => {
    console.log(a);
}, 2000);
