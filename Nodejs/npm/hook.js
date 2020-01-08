new Promise(resolve => {
    setTimeout(() => {
        console.log('hello word');
        resolve();
    }, 1000);
});

function foo() {
    console.log(2);
}

foo();
