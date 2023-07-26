import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [count, setCount] = useState(0);

  const renderPoint = () => {
    let str = '';
    for (let i = 0; i++ < count; ) {
      str += '.';
    }

    return str;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(c => (c > 3 ? 0 : c + 1));
    }, 200);

    return () => clearTimeout(timer);
  }, [count]);

  return <div className=''>加载中{renderPoint()}</div>;
};

Loading.displayName = 'Loading';

export default Loading;
