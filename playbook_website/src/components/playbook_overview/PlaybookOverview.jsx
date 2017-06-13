import React, { Component } from 'react';
import MapCard from './MapCard.jsx';
import FileUploader from '../core/FileUploader.jsx';

class PlaybookOverview extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>Playbook: ({this.props.params.playbook})</p>
                    <MapCard id={1} name="Inferno" />
                    <MapCard id={2} name="Mirage" />
                </div>
                //TODO: id should be unique. so we can use it to pull saved data from db. Get id from stored playbook
                <div>
                    <p>Playbook ({this.props.params.playbook})</p>
                    <FileUploader />
                </div>
            </div>
        );
    }
}

export default PlaybookOverview;
