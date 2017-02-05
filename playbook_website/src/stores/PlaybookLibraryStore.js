import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js"

class PlaybookLibraryStore extends EventEmitter{
    constructor() {
        super();
        this.playbooks = [];
    }

    getAll() {
        return this.playbooks;
    }

    receivePlaybookLibrary(playbooks) {
        this.playbooks = playbooks;
        this.emit("change");
    }
    
    handleActions(action) {
        switch(action.type) {
            case "RECEIVE_PLAYBOOKLIBRARY":
            {
                this.receivePlaybookLibrary(action.playbooks);
                break;
            }
        }
    }
}

const playbookLibraryStore = new PlaybookLibraryStore;

dispatcher.register(playbookLibraryStore.handleActions.bind(playbookLibraryStore));

export default playbookLibraryStore;