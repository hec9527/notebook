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
