import React, { Component } from 'react';

export default class Product extends Component {

    render() {
        var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        let itemDate = new Date(this.props.created_at).toLocaleDateString('en-GB', options);

        const spanStyle = {
            marginLeft: '10px',
            marginRight: '3px'
        }
        return (
            <div className="card bg-light mt-4 p-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a href={this.props.collection_url}>
                                {this.props.name}
                            </a>
                        </h4>
                        <h6 className="card-subtitle mb-2 text-muted">{'By: ' +this.props.user.name}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{'Created on: ' +itemDate}</h6>
                    </div>
                    <div className="panel-body">
                        <div className="media">
                            <div className="media-body">
                                {this.props.title}
                            </div>
                            <div className="media-right">
                                <span className="badge badge-pill badge-primary" style={spanStyle}>
                                    {this.props.posts_count}
                                </span> Posts
                                <span className="badge badge-pill badge-primary" style={spanStyle}>
                                    {this.props.subscriber_count}
                                </span> Subscribers
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}