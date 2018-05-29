import React, { Component } from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.state = {
            inputField: ''
        };
    }

    handleOkClick() {
        const searchString = this.state.inputField;
        this.props.goClick(searchString);
        this.setState({
            inputField: ''
        });
    }

    handleChange(event) {
        this.setState({
            inputField: event.target.value
        });
    }

    render() {
        const filterStyle = {
            marginTop: '20px',
            marginBottom: '20px'
        };
        return (
            <div>
                <div className="input-group mb-3" style={filterStyle}>
                    <input type="text" className="form-control"
                           placeholder="Filter by user, product name or title"
                           aria-label="Filter" aria-describedby="basic-addon2"
                           value={this.state.inputField} onChange={this.handleChange}
                    />
                    <div className="input-group-append">
                        <button onClick={this.handleOkClick}className="btn btn-primary" type="button">Go</button>
                    </div>
                </div>
            </div>
        );
    }
}