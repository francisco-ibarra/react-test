import React, { Component} from 'react';

import Home from './Home';
import Products from './Products';
import About from './About';

import { Route, Switch } from 'react-router-dom';

export default class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/" component={Products}/>
                            <Route exact path="/" component={About}/>

                            <Route path="/products" component={Products}/>
                            <Route path="/about" component={About}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}