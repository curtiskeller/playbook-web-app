import React, { Component } from 'react';

class ChatMessage extends Component {
    render() {
        return (
            <p>{this.props.body}</p>
        );
    }
}

export default ChatMessage;
