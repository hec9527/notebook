/**
 * @param {String} data
 */
function parseLrc(data) {
  return data
    .split('\n')
    .map(str => {
      var res = str.match(/^\[(?<time>.*)\](?<lrc>.*)?$/);
      return res
        ? { time: res.groups.time, lrc: res.groups.lrc || '' }
        : undefined;
    })
    .filter(Boolean);
}

/**
 * @param {String} str
 */
function parseTime(str) {
  var arr = str.split(':').map(_str => parseFloat(_str));
  return +(arr[0] * 60 + arr[1]).toFixed(2);
}

/**
 * @param {HTMLLIElement} el
 */
function setActive(el) {
  if (!el || el.tagName.toLocaleLowerCase() != 'li') return;
  var halfHeight = main.offsetHeight / 2;
  var offsetHeight = el.offsetTop;
  lrcWrap.style.transform = `translateY(${halfHeight - offsetHeight}px)`;
  liList.forEach(item => item.el.classList.remove('active'));
  el.classList.add('active');
  currentActiveEl = el;
}

/**
 * @param {{time:String, lrc:String}[]} data
 */
function createElement(data) {
  return data.map(row => {
    var li = document.createElement('li');
    var time = parseTime(row.time);
    li.innerText = row.lrc;
    li.dataset.time = time;
    return { el: li, time: time };
  });
}

/**
 * @param {{el:HTMLLIElement, time:number}[]} data
 */
function appendLrc(data) {
  var fragment = document.createDocumentFragment();
  data.forEach(item => fragment.appendChild(item.el));
  lrcWrap.appendChild(fragment);
}

/** @type {HTMLDivElement} */
var lrcWrap = document.querySelector('.lrc-wrap');
var liList = createElement(parseLrc(lrc));
/** @type {HTMLAudioElement} */
var audio = document.querySelector('audio');
var main = document.querySelector('main');
var currentActiveEl = null;

lrcWrap.addEventListener('click', e => {
  setActive(e.target);
  const time = e.target.dataset.time;
  if (typeof time !== 'string' || typeof item != 'number') return;
  audio.currentTime = e.target.dataset.time;
});

audio.addEventListener('loadedmetadata', () => {
  lrcWrap.style.transform = `transLateY(${main.offsetHeight / 2 + 30}px)`;
});

audio.addEventListener('timeupdate', () => {
  var currentTime = audio.currentTime;
  liList.forEach((item, index, arr) => {
    if (
      item.time <= currentTime &&
      (!arr[index + 1] || arr[index + 1].time > currentTime)
    ) {
      currentActiveEl != item.el && setActive(item.el);
    }
  });
});

appendLrc(liList);
