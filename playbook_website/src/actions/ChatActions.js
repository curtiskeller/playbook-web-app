import dispatcher from "../dispatcher";
import socket from '../channels/socket.js';
const topicPrefix = "room:";

export function joinChatSession(topic) {
	const channel = socket.channel(topicPrefix + topic)
	
	channel.on("new_msg", payload => {
			dispatcher.dispatch({ type: 'CHAT_MESSAGE', payload: payload });
	})

	channel.join()
    .receive('ok', () => { console.log("joined successfully!")})
    .receive("error", resp => { console.log("Unable to join", resp) });
}

export function sendMessage(message, topic) {
	const channel = socket.channels.find((channel) => {
		return channel.topic === (topicPrefix + topic);
	});
	channel.push("new_msg", {body: message})
}

export function leaveChatSession(topic) {
	const channel = socket.channels.find((channel) => {
		return channel.topic === (topicPrefix + topic);
	});
	channel.leave();
}

