import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class NewSocketGateway {
    @WebSocketServer() server: Server;

    broadcastMessage(message: string) {
        this.server.emit('new-message', message);
    }
}