/**
 * @author    hec9528
 * @time      2020-1-7
 * @change    2020-1-7
 * @description
 *
 *     1, WebSocket 聊天室练习
 *
 */

//  websocket 协议
const ws = new WebSocket('ws://localhost:8008');
const btn = document.getElementsByClassName('btn')[0];

btn.addEventListener('click', () => {
    ws.send(
        JSON.stringify({
            code: 0,
            opt: 1,
            type: 'msg',
            data: {
                time: new Date()
            }
        })
    );
});

ws.addEventListener('open', e => {
    console.log('打开websocket');
});

ws.addEventListener('close', e => {
    console.log('close websocket');
});

ws.addEventListener('message', e => {
    console.log('收到消息', e);
});
