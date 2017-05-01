import React, { Component } from 'react';

class PlayOverview extends Component {
    render() {
        return (
        	<div>
        		<p>Play: ({this.props.params.play})</p>
        	</div>
        );
    }
}

export default PlayOverview;
