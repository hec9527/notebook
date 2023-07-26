import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyNav, MyRoute } from './routes';
import { HashRouter } from 'react-router-dom';
import './app.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <HashRouter>
        <MyNav />
        <MyRoute />
      </HashRouter>
    </>
  </React.StrictMode>
);
