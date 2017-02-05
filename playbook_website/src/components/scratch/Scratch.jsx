import React, { Component } from 'react';
import Chat from '../core/Chat.jsx';

import socket from '../../channels/socket.js';

class Scratch extends Component {
    render() {
        console.log(this.props.params);
        const { scratchId } = this.props.params;
        console.log(scratchId);
        return (
            <div>
                <p>Scratch</p>
                <Chat socket={socket} topic={"room:" + scratchId} />
            </div>
        );//TODO: CHANGE LOBBY TO ID
    }
}

export default Scratch;
