import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from './Pages/Home';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

class Router extends Component {
    render() {
        return (
            <>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </>
        )
    }
}

export default Router