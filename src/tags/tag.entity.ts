import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Index,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiModelProperty()
  @Index('index_tags_on_name')
  @Column({ nullable: false })
  name: string;

  @ApiModelProperty()
  @Column()
  prettyName: string;

  @Column({ default: 0, type: 'int' })
  hotnessScore: number;

  @ApiModelProperty()
  @Column({ default: 'uncategorized', nullable: false })
  category: string;

  @ApiModelProperty()
  @Column()
  bgColorHex: string;

  @ApiModelProperty()
  @Column()
  aliasFor: string;

  @Column({ default: false })
  requiresApproval: boolean;

  @Column({ default: 0, type: 'int' })
  taggingsCount: number;

  @ApiModelProperty()
  @Column()
  textColorHex: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
