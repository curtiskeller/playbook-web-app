import dispatcher from "../dispatcher";

export function joinScratchSession(socket) {
	console.log(socket)
	const chatChannel = socket.channel('room:lobby') //TODO: specific room

	chatChannel.on("new_msg", payload => {
	  // dispatch a message to update the chat window on scratch or other component
	})

	chatChannel.join()
    .receive('ok', () => { console.log("joined successfully!")})
    .receive("error", resp => { console.log("Unable to join", resp) });

}