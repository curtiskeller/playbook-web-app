import React, { Component } from 'react';
import Chat from '../core/Chat.jsx';

class Scratch extends Component {
    render() {
        return (
            <div>
                <p>Scratch</p>
                <Chat socket={this.props.socket} topic={"room:lobby"} />
            </div>
        );//TODO: CHANGE LOBBY TO ID
    }
}

export default Scratch;
