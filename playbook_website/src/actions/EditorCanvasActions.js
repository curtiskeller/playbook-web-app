import dispatcher from "../dispatcher";
import socket from '../channels/socket.js';

export function joinDesignSession(topic) {
	const channel = socket.channel("play:" + topic)
	
	//channel.on("new_msg", payload => {
	//		dispatcher.dispatch({ type: 'CHAT_MESSAGE', payload: payload });
	//})

	channel.join()
    .receive('ok', () => { console.log("joined design successfully!")})
    .receive("error", resp => { console.log("Unable to join design", resp) });
}

