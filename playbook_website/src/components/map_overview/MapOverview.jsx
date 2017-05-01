import React, { Component } from 'react';
import PlayCard from './PlayCard.jsx';

class MapOverview extends Component {
    render() {
        return (
        	<div>
        		<p>Map: ({this.props.params.map})</p>
        		<h4>CT plays</h4>
        		<PlayCard id={1} name="Default CT"/>
        		<h4>T plays</h4>
        		<PlayCard id={2} name="Default T"/>
        	</div>
        );
    }
}

export default MapOverview;
