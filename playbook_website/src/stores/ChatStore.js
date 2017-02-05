import { EventEmitter } from "events";
import { Socket } from 'phoenix';

import dispatcher from "../dispatcher.js"

class ChatStore extends EventEmitter {

    constructor() {
        super();
        this.messages = [];
    }

    getAll() {
        return this.messages;
    }

    addMessage(message) {
        this.messages.push(message);
        this.emit("change");
    }
    
    handleActions(action){
        switch(action.type){
            case "CHAT_MESSAGE":
            {
                console.log(action.payload);
                this.addMessage(action.payload)
                break;
            }
        }
    }
}

const chatStore = new ChatStore;

dispatcher.register(chatStore.handleActions.bind(chatStore));

export default chatStore;