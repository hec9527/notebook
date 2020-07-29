function delayPrint(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(msg);
            resolve(msg);
        }, 500);
    });
}

async function foo() {
    await delayPrint('hello');
    await delayPrint('word');
    await delayPrint('.');
    await delayPrint('hello');
    await delayPrint('javascript');
}

foo();
