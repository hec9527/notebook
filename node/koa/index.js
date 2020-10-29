const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const app = new Koa();

app.use(static(path.join(__dirname, 'static')));

app.use(async ctx => {
    if (ctx.method === 'option') return ctx.statuscode === 200;

    console.log('%cURL:', 'color:red', ctx.url);
    await new Promise(resolve => {
        setTimeout(() => {
            ctx.body = { code: 0, message: 'hello world' };
            resolve();
        }, 0);
    });
});

app.listen(10086, 'localhost', () => console.log('server as http://localhost:10086'));
