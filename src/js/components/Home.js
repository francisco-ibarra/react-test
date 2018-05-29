import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Product Hunt crawler with React</h1>
                <p className="lead">A simple site showing the latest collections from Product Hunt.</p>
                <hr className="my-4"/>
                <p>Runs on Heroku. Built with Flux & React.</p>
            </div>
        );
    }
}