import { render, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './index.less';

console.log('%c   I L❤️ve U . . . Parcel & Preact', 'color:red');

console.log('%c > 基于PReact、Parcel、less实现的hello world程序', 'color:#717');

const App = () => {
  const [times, setTimes] = useState(0);

  useEffect(() => {
    console.log('%c  App mounted!', 'color:#789a');
  }, []);

  return (
    <div className='container'>
      <h1>Hello Parcel & Preact</h1>
      <p>
        <b>
          I L<span style='color: red;'>❤</span>ve You !
        </b>
      </p>
      <span class='tips-msg'>
        如果你看到这个页面，说明你的 Preact 和 Parcel 的hello
        world程序已经成功运行，
        <br />
        点一下下面这个按钮，查看效果吧，这可是基于Preact的响应式更新实现的哦 ~o~
        ~o~ ~o~
        <br />
        <span>See more detail at console</span>
      </span>
      <p>
        <button onClick={() => setTimes(times + 1)}>点击了{times}次</button>
      </p>
    </div>
  );
};

render(<App />, document.getElementById('app'));
