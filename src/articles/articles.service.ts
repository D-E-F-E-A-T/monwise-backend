import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Article } from './article.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArticlesService extends TypeOrmCrudService<Article> {
  constructor(@InjectRepository(Article) repo) {
    super(repo);
  }

  async getArticleById(articleId: string) {
    const found = await Article.findOne({ where: { id: articleId } });

    if (!found) {
      throw new NotFoundException(`Article with ID ${articleId} not found`);
    }
    return found;
  }

  async updateCommentsCount(articleId: string): Promise<Article> {
    const article = await this.getArticleById(articleId);
    article.commentsCount += 1;

    await article.save();

    return article;
  }
}
