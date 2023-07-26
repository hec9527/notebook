import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import LazyLoading from './components/lazyLoad';

type MyRoute = {
  routePath: string;
  routeText: string;
  pagePath: React.LazyExoticComponent<any>;
};

const routers: MyRoute[] = [
  {
    routePath: '/message',
    routeText: '消息',
    pagePath: React.lazy(() => import('./pages/message')),
  },
  {
    routePath: '/profile',
    routeText: '个人',
    pagePath: React.lazy(() => import('./pages/profile')),
  },
  {
    routePath: '/about',
    routeText: '关于',
    pagePath: React.lazy(() => import('./pages/about')),
  },
  {
    routePath: '/',
    routeText: '主页',
    pagePath: React.lazy(() => import('./pages/home')),
  },
];

render(
  <div className='page-container'>
    <HashRouter>
      <nav>
        {routers.map(r => (
          <Link className='links' key={r.routePath} to={r.routePath}>
            {r.routeText}
          </Link>
        ))}
      </nav>
      <Switch>
        {routers.map(r => (
          <Route exact path={r.routePath} key={r.routePath}>
            <LazyLoading component={r.pagePath} />
          </Route>
        ))}

        <Redirect to='/' />
      </Switch>
    </HashRouter>
  </div>,

  document.getElementById('app')
);
