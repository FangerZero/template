import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div >
                <hr />
                <Link to="/"> Home </Link> |
                <Link to="/page1"> Page 1 </Link> |
                <Link to="/page2"> Page 2 </Link>
            </div>
        )
    }
}

export default Footer