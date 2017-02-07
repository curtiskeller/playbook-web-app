import React, { Component } from 'react';
import ChatMessage from './ChatMessage.jsx'
import * as ChatActions from '../../actions/ChatActions.js'
import ChatStore from '../../stores/ChatStore.js'

class Chat extends Component {

    constructor() {
        super();
        this.state = { messages: [], newMessage: "" };
        this.updateMessages = this.updateMessages.bind(this);
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    updateMessages() {
        this.setState({
            messages: ChatStore.getAll(),
            newMessage: this.state.newMessage
        });
    }

    handleMessageInput(event) {
        this.setState(
            {
                messages: this.state.messages,
                newMessage: event.target.value
            });
    }

    sendMessage() {
        const { socket, topic } = this.props;
        ChatActions.sendMessage(this.state.newMessage,socket,topic);
        this.setState({
            messages: this.state.messages,
            newMessage: ""
        })
    }

    componentWillMount() {
        const { socket, topic } = this.props;
        
        ChatActions.joinChatSession(socket,topic);
        ChatStore.on("change", this.updateMessages);
    }

    componentWillUnmount() {
        const { socket, topic } = this.props;
        ChatActions.leaveChatSession(socket,topic)
        ChatStore.removeListener("change", this.updateMessages);
    }

    componentWillReceiveProps(nextProps)
    {
        const { socket, topic } = nextProps;
        if(this.props.topic !== nextProps.topic)
        {
            ChatActions.leaveChatSession(socket, this.props.topic);
            ChatActions.joinChatSession(socket,topic);
        }
    }

    render() {
        const Messages = this.state.messages.map((message, index) => <ChatMessage key={index} body={message.body}/> );
        return (
            <div id="chat">
                {Messages}
                <br />
                <br />
                <input type="text" value={this.state.newMessage} onChange={this.handleMessageInput} />
                <button className="btn btn-primary" onClick={this.sendMessage}>Send</button>
            </div>
        );
    }
}

export default Chat;
