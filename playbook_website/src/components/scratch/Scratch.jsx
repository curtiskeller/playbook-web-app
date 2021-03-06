import React, { Component } from 'react';
import Chat from '../core/Chat.jsx';
import EditorCanvas from '../core/EditorCanvas.jsx';

class Scratch extends Component {
    render() {
        const { scratchId } = this.props.params;
        return (
            <div>
                <p>Scratch</p>
                <EditorCanvas topic={scratchId}/>
                <Chat topic={scratchId} />
            </div>
        );//TODO: CHANGE LOBBY TO ID
    }
}

export default Scratch;