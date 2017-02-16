import { EventEmitter } from "events";
import { Socket } from 'phoenix';

import dispatcher from "../dispatcher.js"

class EditorCanvasStore extends EventEmitter {

    constructor() {
        super();
        this.canvasState = {};
    }
    
    handleActions(action){
        switch(action.type){
            case "UPDATE_MESSAGE":
            {
                console.log("UPDATE_MESSAGE" + action.payload);
                break;
            }
        }
    }
}

const editorCanvasStore = new EditorCanvasStore;

dispatcher.register(editorCanvasStore.handleActions.bind(editorCanvasStore));

export default editorCanvasStore;