import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './components/home.jsx';
import Detail from './components/detail';
import About from './components/about';
import Message from './components/message';
import './index.css';

export default class Index extends Component {
    render() {
        return (
            <div className='block'>
                <center>
                    <h1>hash-router</h1>
                </center>
                <HashRouter>
                    <div className='flex-box' style={{ marginBottom: 8 }}>
                        <Link to='/home'>home</Link>
                        <Link to='/about'>about</Link>
                        <Link to='/detail'>detail</Link>
                        <Link to='/message'>message</Link>
                        <Link to='/message/inbox'>msg/In</Link>
                        <Link to='/message/outbox'>msg/Out</Link>
                    </div>

                    <Switch>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/message' component={Message}></Route>
                        <Route path='/detail' component={Detail}></Route>
                        <Redirect path='/*' to='/home'></Redirect>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}
