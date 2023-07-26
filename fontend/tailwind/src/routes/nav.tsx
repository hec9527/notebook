import React from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';

export const MyNav: React.FC = () => {
  return (
    <div className='bg-sky-800 w-40'>
      {routes.map(r => (
        <Link to={r.path} key={r.path} className='py-2 px-8 list-none hover:bg-sky-500 cursor-pointer block text-white'>
          {r.label}
        </Link>
      ))}
    </div>
  );
};

MyNav.displayName = 'MyNav';
