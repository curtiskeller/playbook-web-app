import React, { Component } from 'react';

class Playbook extends Component {
    render() {
        const { name } = this.props;        
        return (
                <div className="col-md-4">
                    <h2>{name}</h2>
                </div>
        );
    }
}

export default Playbook;