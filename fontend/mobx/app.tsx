import React from 'react';

import Counter from './pages/counter';
import Todos from './pages/todos';

const App: React.FC = () => {
  return (
    <div className=''>
      <Counter />
      <hr />
      <Todos />
      <hr />
    </div>
  );
};

App.displayName = 'App';

export default App;
