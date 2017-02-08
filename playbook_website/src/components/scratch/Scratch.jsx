import React, { Component } from 'react';
import Chat from '../core/Chat.jsx';


class Scratch extends Component {
    render() {
        const { scratchId } = this.props.params;
        return (
            <div>
                <p>Scratch</p>
                <Chat topic={"room:" + scratchId} />
            </div>
        );//TODO: CHANGE LOBBY TO ID
    }
}

export default Scratch;
