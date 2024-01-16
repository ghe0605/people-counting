import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'; // TypeOrmModule 추가
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { ContentModule } from './content/content.module';
import { CoreDataModule } from './data/core-data/core-data.module';
import { ChatEntity } from './data/chat-data/entity/chat.entity';
import { ChatLikeEntity } from './data/chat-data/entity/chat-like.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '0131',
      database: process.env.DB_NAME || 'localhost',
      entities: [ChatEntity, ChatLikeEntity],
      synchronize: true,
    }),
    UserModule,
    ChatModule,
    ContentModule,
    CoreDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
