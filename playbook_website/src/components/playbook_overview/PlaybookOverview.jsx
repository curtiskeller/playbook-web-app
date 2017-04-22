import React, { Component } from 'react';
import FileUploader from '../core/FileUploader.jsx';

class PlaybookOverview extends Component {
    render() {
        return (
            <div>
                <p>Playbook ({this.props.params.playbook})</p>
                <FileUploader />
            </div>
        );
    }
}

export default PlaybookOverview;
