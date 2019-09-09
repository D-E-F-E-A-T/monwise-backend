import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Index,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index('index_tags_on_name')
  @Column({ nullable: false })
  name: string;

  @Column()
  prettyName: string;

  @Column({ default: 0, type: 'int' })
  hotnessScore: number;

  @Column({ default: 'uncategorized', nullable: false })
  category: string;

  @Column()
  bgColorHex: string;

  @Column()
  aliasFor: string;

  @Column({ default: false })
  requiresApproval: boolean;

  @Column({ default: 0, type: 'int' })
  taggingsCount: number;

  @Column()
  textColorHex: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
