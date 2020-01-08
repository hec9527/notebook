new Promise(resolve => {
    setTimeout(() => {
        console.log('hello word');
        resolve();
    }, 1000);
});
