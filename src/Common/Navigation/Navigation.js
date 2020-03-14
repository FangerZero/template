import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div className="ui four item borderless menu">
                <div className="header item">
                    Company Name
                </div>
                <Link className="item mobile hidden" to="/">Home</Link>
                <Link className="item mobile hidden" to="/page1">Page 1</Link>
                <Link className="item mobile hidden" to="/page2">Page 2</Link>
            </div>
        )
    }
}

export default Navigation