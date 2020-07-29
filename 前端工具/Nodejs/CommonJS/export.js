let x = 1;

setTimeout(() => {
    x = 2;
    console.log(x);
}, 2000);

module.exports = x;
