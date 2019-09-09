import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Tag } from './tag.entity';

@Injectable()
export class TagsService extends TypeOrmCrudService<Tag> {
  constructor(@InjectRepository(Tag) repo) {
    super(repo);
  }
}
