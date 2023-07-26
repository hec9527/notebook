import { useState } from 'react';
import Basic from './pages/basic';
import Register from './pages/register';
import Validation from './pages/validation';
import Integrating from './pages/integrating';
import Error from './pages/error';
import './App.css';

const pages: { label: string; component: React.FC }[] = [
  { label: '基础案例', component: Basic },
  { label: 'register注册', component: Register },
  { label: '表单验证', component: Validation },
  { label: '集成到现有组件', component: Integrating },
  { label: '错误处理', component: Error },
];

function App() {
  const [index, setIndex] = useState(0);

  const renderComponent = () => {
    const Com = pages[index].component;
    return <Com />;
  };

  return (
    <div className='App'>
      <p style={{ float: 'right', marginRight: '80px' }}>
        中文文档：
        <a href='https://react-hook-form.com/zh/get-started' target='_blank'>
          前往
        </a>
      </p>
      <ul>
        {pages.map((p, i) => (
          <a href='#' key={p.label}>
            <li onClick={() => setIndex(i)}>{p.label}</li>
          </a>
        ))}
      </ul>

      <div className='demo-container'>{renderComponent()}</div>
    </div>
  );
}

export default App;
