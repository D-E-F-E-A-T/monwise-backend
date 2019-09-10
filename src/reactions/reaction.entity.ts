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

  @Column()
  reaction: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  lastVoted: Date;

  @ManyToOne(type => Article, article => article.reactions, { eager: false })
  article: Article;

  @Column()
  articleId: string;
}
