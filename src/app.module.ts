import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { ContentModule } from './content/content.module';
import { CoreDataModule } from './data/core-data/core-data.module';
import { ChatDataModule } from './data/chat-data/chat-data.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewSocketModule } from './chat/new.chat.module'; // 새로운 모듈 추가

@Module({
  imports: [NewSocketModule], // 새로운 모듈 추가
  controllers: [AppController, NewSocketController], // 새로운 컨트롤러 추가
  providers: [AppService],
})
export class AppModule {}


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    UserModule,
    ChatModule,
    ContentModule,
    CoreDataModule,
    ChatDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
