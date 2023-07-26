import React from 'react';
import Hash from './router-hash';
import History from './router-history';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHash: false,
        };
    }

    render() {
        return (
            <div>
                <div>
                    改变路由模式：
                    <button
                        onClick={() =>
                            this.setState({ isHash: !this.state.isHash })
                        }
                    >
                        {this.state.isHash ? 'hash' : 'history'} -->
                        {this.state.isHash ? 'history' : 'hash'}
                    </button>
                </div>
                {this.state.isHash && <Hash />}
                {!this.state.isHash && <History />}
            </div>
        );
    }
}
