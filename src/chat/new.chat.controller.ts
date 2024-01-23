import { Controller, Get } from '@nestjs/common';
import { NewSocketAdapter } from './postgres-adapter';

@Controller('new-api')
export class NewSocketController {
    constructor(private newSocketAdapter: NewSocketAdapter) {}

    @Get('send-message')
    async sendMessage() {
        const message = 'Hello from New API Server!';
        await this.newSocketAdapter.sendAndSaveMessage(message);
        return { message: 'Message sent!' };
    }

    @Get('get-messages')
    async getMessages() {
        const messages = await this.newSocketAdapter.getMessages();
        return { messages };
    }
}