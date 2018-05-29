import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './Nav';
import Content from './Content';

export default class Layout extends Component {
    render() {
        return(
            <div>
                <Router>
                    <div>
                        <Nav />
                        <Content />
                    </div>
                </Router>
            </div>
        );
    }
}