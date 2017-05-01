import React, { Component } from 'react';
import { Link } from 'react-router';

class PlayCard extends Component {
    render() {
		const { name } = this.props;
        const { id } = this.props;
        return (
        	<div>
                <Link to={'/playOverview/' + id}>
        			<p>Play: {name}</p>
        		</Link>
        	</div>
        );
    }
}

export default PlayCard;