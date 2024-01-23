import { Module } from '@nestjs/common';
import { NewSocketGateway } from './new.chat.gateway';

import { PostgresAdapter } from './postgres-adapter';
import { WebSocketModule } from '@nestjs/websockets';

@Module({
    imports: [WebSocketModule],
    providers: [NewSocketGateway, PostgresAdapter],
})
export class NewSocketModule {}