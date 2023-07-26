import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

export const MyRoute: React.FC = () => {
  return (
    <Routes>
      {routes.map(r => (
        <Route key={r.path} path={r.path} element={r.component} />
      ))}
    </Routes>
  );
};

MyRoute.displayName = 'MyRoute';
