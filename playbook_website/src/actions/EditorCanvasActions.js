import dispatcher from "../dispatcher";
import socket from '../channels/socket.js';
const topicPrefix = "play:";

export function joinDesignSession(topic) {
	const channel = socket.channel(topicPrefix + topic)
	
	channel.on("update", payload => {
			dispatcher.dispatch({ type: 'UPDATE_MESSAGE', payload: payload });
	})


	channel.join()
    .receive('ok', () => { console.log("joined design successfully!")})
    .receive("error", resp => { console.log("Unable to join design", resp) });
}

export function updateProperty(topic, propName, propValue) {
	const channel = socket.channels.find((channel) => {
		return channel.topic === (topicPrefix + topic);
	});
	channel.push("update", {play_id: topic, propName: propName, propValue: propValue})
}