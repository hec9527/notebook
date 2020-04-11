new Promise((resolve) => {
    setTimeout(() => {
        console.log('hello word');
        resolve();
    }, 1000);
});

function foo() {
    console.log(2);
}

foo();

Object.keys(process.env).forEach((item) => {
    if (/^npm_package_.*/.test(item)) {
        console.log(`${item}: ${process.env[item]}`);
    }
});
