import React, { Component } from 'react';
<<<<<<< Updated upstream
import FileUploader from '../core/FileUploader.jsx';
=======
<<<<<<< HEAD
import MapCard from './MapCard.jsx';
=======
import FileUploader from '../core/FileUploader.jsx';
>>>>>>> origin/master
>>>>>>> Stashed changes

class PlaybookOverview extends Component {
    render() {
        return (
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
        	<div>
        		<p>Playbook: ({this.props.params.playbook})</p>
        		<MapCard id={1} name="Inferno" />
        	    <MapCard id={2} name="Mirage" />
        	</div>
			//TODO: id should be unique. so we can use it to pull saved data from db. Get id from stored playbook
            
=======
>>>>>>> Stashed changes
            <div>
                <p>Playbook ({this.props.params.playbook})</p>
                <FileUploader />
            </div>
<<<<<<< Updated upstream
=======
>>>>>>> origin/master
>>>>>>> Stashed changes
        );
    }
}

export default PlaybookOverview;
