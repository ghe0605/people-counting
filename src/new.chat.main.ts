import { NestFactory } from '@nestjs/core';
import { NewSocketModule } from './chat/new.chat.module';

async function bootstrap() {
    const app = await NestFactory.create(NewSocketModule);
    app.enableCors(); // Allow cross-origin resource sharing
    await app.listen(3001); // 다른 포트로 리스닝
}
bootstrap();