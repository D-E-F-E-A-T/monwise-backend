import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Index,
  OneToMany,
} from 'typeorm';
import { IsInt, IsDate, Min, Max, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Comment } from '../comments/comment.entity';
import { Reaction } from '../reactions/reaction.entity';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiModelProperty()
  @Column()
  title: string;

  @Column({ nullable: true })
  abuseRemovalReason: string;

  @Column({ default: false })
  approved: boolean;

  @Column({ default: false })
  archived: boolean;

  @ApiModelProperty()
  @Column('text')
  bodyHtml: string;

  @ApiModelProperty()
  @Column({ type: 'text', nullable: true })
  bodyMarkdown: string;

  @ApiModelProperty()
  @Column()
  canonicalUrl: string;

  @Column({ default: 0, nullable: false })
  @IsInt()
  @Min(0)
  @Max(10)
  commentsCount: number;

  @ApiModelProperty({ required: false })
  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  @IsBoolean()
  featured: boolean;

  @Index('index_articles_on_hotness_score')
  @Column({ default: 0 })
  @IsInt()
  hotnessScore: number;

  @Column({ default: 0, type: 'int' })
  @IsInt()
  featuredImpressions: number;

  @Column({ default: '2019-09-05 12:00:00' })
  @IsDate()
  lastCommentAt: Date;

  @ApiModelProperty()
  @Column({ nullable: false })
  mainImage: string;

  @ApiModelProperty()
  @Column({ default: '#dddddd' })
  mainImageBackgroundHexColor: string;

  @Column({ default: 0, type: 'int' })
  @IsInt()
  pageViewsCount: number;

  @Index('index_articles_on_published')
  @Column({ default: false })
  @IsBoolean()
  published: boolean;

  @Index('index_articles_on_published_at')
  @IsDate()
  @Column({ nullable: true })
  publishedAt: Date;

  @Column({ default: 0, nullable: false })
  @IsInt()
  reactionsCount: number;

  @Index('index_articles_on_slug')
  @Column({ nullable: true })
  slug: string;

  @ApiModelProperty()
  @Column({ default: true, type: 'boolean' })
  showComments: boolean;

  @Column({ default: 0 })
  spaminessRating: number;

  @CreateDateColumn()
  createdAt: Date;

  @ApiModelProperty()
  @Column('text')
  tagList: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(type => Comment, comment => comment.article, { eager: true })
  comments: Comment[];

  @OneToMany(type => Reaction, reaction => reaction.article, { eager: true })
  reactions: Reaction[];
}
