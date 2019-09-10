import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Reaction } from './reaction.entity';

@Injectable()
export class ReactionsService extends TypeOrmCrudService<Reaction> {
  constructor(@InjectRepository(Reaction) repo) {
    super(repo);
  }
}
