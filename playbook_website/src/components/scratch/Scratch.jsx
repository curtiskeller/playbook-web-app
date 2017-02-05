import React, { Component } from 'react';
import * as ScratchActions from '../../actions/ScratchActions.js'

class Scratch extends Component {
	
	componentDidMount() {
		const { socket } = this.props;
		ScratchActions.joinScratchSession(socket);
	}

    render() {
        return (
            <p>Scratch</p>
        );
    }
}

export default Scratch;
