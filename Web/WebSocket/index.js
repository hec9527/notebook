// const Koa = require('koa');
// const Router = require('koa-router');
// const Websocket = require('ws');
// const app = new Koa();

// const router = new Router();
// const ws = new Websocket('ws://localhost:8009');

// app.use(router.routes()).use(router.allowedMethods());
// app.listen(8008, 'localhost', () =>
//     console.log('info: server run at: http://localhost:8008')
// );

// router.get('/', ctx => {
//     ctx.response.body = 'hello word';
// });

// ws.on('connect', req => {
//     console.log(req);
//     req.on('message', msg => {
//         console.log('收到消息：', msg);
//     });
// });

// ws.on('close', req => {
//     console.log('close webscoket', req);
// });

// ws.on('request', req => {
//     console.log('收到请求：', req);
// });

const WebSocket = require('ws');

const wss = new WebSocket.Server({ host: '127.0.0.1', port: 8008 });

wss.on('connection', ws => {
    ws.send(
        JSON.stringify({
            code: 0,
            msg: 'ok',
            data: {
                msg: '欢迎新群友加入',
                data: new Date()
            }
        })
    );

    ws.on('message', message => {
        console.log('received:', JSON.parse(message));
    });
});

// 文档地址 github ：https://github.com/websockets/ws
