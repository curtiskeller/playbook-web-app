import dispatcher from "../dispatcher";

export function joinChatSession(socket, topic) {
	const channel = socket.channel(topic)
	
	channel.on("new_msg", payload => {
			dispatcher.dispatch({ type: 'CHAT_MESSAGE', payload: payload });
	})

	channel.join()
    .receive('ok', () => { console.log("joined successfully!")})
    .receive("error", resp => { console.log("Unable to join", resp) });
}

export function sendMessage(message, socket, topic) {
	const channel = socket.channels.find((channel) => {
		return channel.topic === topic;
	});
	channel.push("new_msg", {body: message})
}

export function leaveChatSession(socket, topic) {
	const channel = socket.channels.find((channel) => {
		return channel.topic === topic;
	});
	channel.leave();
}

