(function () {
  const imgArr = Array.from({ length: 6 }, (_, k) => k + 1);

  /** @type { HTMLDivElement} */
  const content = document.querySelector('.slide-content');
  /** @type {HTMLDivElement} */
  const indicator = document.querySelector('.slide-indicator');
  /** @type {HTMLDivElement} */
  const slideLeft = document.querySelector('.slide-left');
  /** @type {HTMLDivElement} */
  const slideRight = document.querySelector('.slide-right');
  let currentIndex = 0;

  function init() {
    imgArr.forEach(num => {
      const img = document.createElement('img');
      img.src = `./imgs/${num}.jpg`;
      content.appendChild(img);

      const indic = document.createElement('span');
      indic.className = num - 1 === currentIndex ? 'active' : '';
      indicator.appendChild(indic);
    });

    const child = content.children;

    content.insertBefore(child[child.length - 1].cloneNode(), child[0]);
    content.appendChild(child[1].cloneNode());
  }

  function move() {
    content.style.transition = '1s';
    content.style.transform = `translateX(${-currentIndex * 100}%)`;

    console.log({ currentIndex });

    Array.from(indicator.children).forEach((el, index) => {
      if (index !== currentIndex) {
        el.classList.remove('active');
      } else {
        el.classList.add('active');
      }
    });
  }

  function moveLoop(index) {
    content.style.transition = 'none';
    content.style.transform = `translateX(${-index * 100}%)`;
    content.offsetWidth;
    content.style.transition = '1s';
    move();
  }

  function moveToLeft() {
    if (currentIndex >= 1) {
      currentIndex--;
      move();
    } else {
      currentIndex = imgArr.length - 1;
      moveLoop(imgArr.length + 1);
    }
  }

  function moveToRight() {
    if (currentIndex < imgArr.length - 1) {
      currentIndex++;
      move();
    } else {
      currentIndex = 0;
      moveLoop(-1);
    }
  }

  function setIndicator(e) {
    /** @type {HTMLSpanElement} */
    const el = e.target;
    const index = Array.from(indicator.children).findIndex(item => item === el);

    if (index >= 0) {
      currentIndex = index;
      move();
    }
  }

  slideLeft.onclick = moveToLeft;
  slideRight.onclick = moveToRight;
  indicator.onclick = setIndicator;

  init();
})();
