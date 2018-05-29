import React, { Component} from 'react';

import { NavLink, Link } from 'react-router-dom';


export default class Nav extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar-collapse collapse" id="main-nav">
                    <ul className="nav navbar-nav ml-lg-5">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}