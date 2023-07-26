import React from 'react';
import { observer } from 'mobx-react-lite';
import { inject } from 'mobx-react';
import { Count } from '../../store';

interface IProps {
  counter: Count;
}

const Counter: React.FC<IProps> = observer(({ counter }) => {
  return (
    <div>
      <p>Current count is:{counter.count}</p>
      <button type='button' onClick={() => counter.addCount()}>
        increse
      </button>
      <button type='button' onClick={() => counter.reduceCount()}>
        reduce
      </button>
      <button type='button' onClick={() => counter.addCount(10)}>
        increse by 10
      </button>
      <button type='button' onClick={() => counter.reduceCount(10)}>
        reduce by 10
      </button>
      <button type='button' onClick={() => counter.clearCount()}>
        clear
      </button>
    </div>
  );
});

Counter.displayName = 'Counter';

export default inject('counter')(Counter);
