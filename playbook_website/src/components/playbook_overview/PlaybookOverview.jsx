import React, { Component } from 'react';

class PlaybookOverview extends Component {
    render() {
        return (
            <p>Playbook ({this.props.params.playbook})</p>
        );
    }
}

export default PlaybookOverview;
