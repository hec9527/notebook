import React from 'react';
import {
    hashHistory,
    Switch,
    Route,
    IndexRoute,
    Link,
    Redirect,
} from 'react-router-dom';
import MsgIn from './msgIn';
import MsgOut from './msgout';
import MsgAll from './msgAll';

export default function home() {
    return (
        <div className='page flex-msg'>
            <div>
                <div>
                    <Link to='/message'>message all</Link>
                </div>
                <div>
                    <Link to='/message/inbox'>inbox</Link>
                </div>
                <div>
                    <Link to='/message/outbox'>outbox</Link>
                </div>
            </div>
            <div>
                <Switch>
                    <Route to='/inbox' component={MsgIn}></Route>
                    <Route to='/outbox' component={MsgOut}></Route>
                    <Route to='/message' component={MsgAll} exact></Route>
                </Switch>
            </div>
        </div>
    );
}
