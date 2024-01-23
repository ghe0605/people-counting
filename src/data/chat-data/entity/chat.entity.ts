import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChatLikeEntity } from './chat-like.entity';

@Entity({ name: 'chat' })
export class ChatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  senderId: number;

  @Column()
  roomId: number;

  @OneToMany(() => ChatLikeEntity, (cl) => cl.chat)
  likes: Array<ChatLikeEntity>;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;
}
