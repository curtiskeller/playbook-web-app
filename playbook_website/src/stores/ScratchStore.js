import { EventEmitter } from "events";
import { Socket } from 'phoenix';

import dispatcher from "../dispatcher.js"

class ScratchStore extends EventEmitter {

}

const scratchStore = new ScratchStore;

dispatcher.register(scratchStore.handleActions.bind(scratchStore));

export default scratchStore;