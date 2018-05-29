import React, { Component } from 'react';

export default class About extends Component {
    render() {
        const elementStyle = {
            marginTop: '20px'
        }
        return (
            <div style={elementStyle}>
                <h2>Built with</h2>
                <ul>
                    <li>
                        React (<a href="https://reactjs.org/">https://reactjs.org/</a>)
                    </li>
                    <li>
                        Flux (<a href="https://facebook.github.io/flux/">https://facebook.github.io/flux/</a>)
                    </li>
                    <li>
                        Heroku (<a href="https://www.heroku.com/">https://www.heroku.com/</a>)
                    </li>
                    <li>
                        Bootstrap (<a href="https://getbootstrap.com/">https://getbootstrap.com/</a>)
                    </li>
                </ul>
                <p>Uses the <a href="https://api.producthunt.com/v1/docs">Product Hunt API</a></p>
            </div>
        );
    }
}