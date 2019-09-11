import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Article } from '../articles/article.entity';

@Entity()
export class Reaction extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 1 })
  reaction: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @UpdateDateColumn()
  lastVoted: Date;

  @ManyToOne(type => Article, article => article.reactions, { eager: false })
  article: Article;

  @Column()
  articleId: string;
}
