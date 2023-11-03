function browserMenuBarHeight() {
    return window.outerHeight - window.innerHeight;
}

/**
 * @param {number} x
 * @param {number} y
 * @returns {{x:number, y:number}}
 */
function screenPos2pagePos(x, y) {
    const pageX = x - window.screenX;
    const pageY = y - window.screenY - browserMenuBarHeight();
    return { x: pageX, y: pageY };
}

/**
 * @param {number} x
 * @param {number} y
 * @returns {{x:number, y:number}}
 */
function pagePos2ScreenPos(x, y) {
    const screenX = x + window.screenX;
    const screenY = y + window.screenY + browserMenuBarHeight();
    return { x: screenX, y: screenY };
}

const card = document.querySelector('img');
const broad = new BroadcastChannel('card');

broad.onmessage = function (e) {
    const pos = screenPos2pagePos(e.data.x, e.data.y);
    console.log(pos);

    card.style.left = pos.x + 'px';
    card.style.top = pos.y + 'px';
};

card.onmousedown = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;

    window.onmousemove = function (e) {
        const newX = e.pageX - x;
        const newY = e.pageY - y;

        card.style.left = newX + 'px';
        card.style.top = newY + 'px';

        broad.postMessage(pagePos2ScreenPos(newX, newY));
    };

    window.onmouseup = function () {
        window.onmousemove = null;
        window.onmouseup = null;
    };
};

function init() {
    const url = new URL(location.href);
    const type = url.searchParams.get('type') || 'j';
    card.src = `./${type}.jpg`;

    broad.postMessage(pagePos2ScreenPos(0, 0));
}

init();
