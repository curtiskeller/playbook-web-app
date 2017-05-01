import React, { Component } from 'react';
import { Link } from 'react-router';

class MapCard extends Component {
    render() {
		const { name } = this.props;
        const { id } = this.props;
        return (
        	<div>
                <Link to={'/mapOverview/' + id}>
        			<p>Map: {name}</p>
        		</Link>
        	</div>
        );
    }
}

export default MapCard;