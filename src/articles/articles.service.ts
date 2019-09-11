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

  async updateCommentsCount(articleId: string): Promise<void> {
    const article = await this.getArticleById(articleId);
    article.commentsCount += 1;

    await article.save();
  }

  async updateReactionsCount(articleId: string, value: number): Promise<void> {
    const article = await this.getArticleById(articleId);
    if (article.reactionsCount === 0 && value < 0) {
      return;
    }
    article.reactionsCount = article.reactionsCount + value;

    await article.save();
  }
}
