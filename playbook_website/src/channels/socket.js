import { Socket } from 'phoenix';

const userId = "123";

const socket = new Socket('ws://localhost:4000/socket', {
  params: {
    id: userId,
  },
  logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data); },
});

socket.connect();

export default socket