import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Article } from './article.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArticlesService extends TypeOrmCrudService<Article> {
  constructor(@InjectRepository(Article) repo) {
    super(repo);
  }
}
