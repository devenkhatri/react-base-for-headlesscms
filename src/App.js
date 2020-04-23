import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "bootswatch/dist/flatly/bootstrap.min.css"; 

import Home from './pages/index';
import Albums from './pages/albums';
import Posts from './pages/posts';
import Todos from './pages/todos';
import Error from './pages/404';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/albums" component={Albums} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/todos" component={Todos} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;