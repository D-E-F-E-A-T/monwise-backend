import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Reaction } from './reaction.entity';
import { ArticlesService } from '../articles/articles.service';

@Injectable()
export class ReactionsService extends TypeOrmCrudService<Reaction> {
  constructor(
    @InjectRepository(Reaction) repo,
    private articlesService: ArticlesService,
  ) {
    super(repo);
  }

  stripKeys(obj: object, keys: string[]): object {
    keys.forEach(element => {
      delete obj[element];
    });
    return obj;
  }

  async createReaction(articleId: string) {
    const found = await this.repo.findOne({ where: { articleId } });

    if (found) {
      found.isDeleted = !found.isDeleted;
      found.reaction += 1;
      await found.save();

      if (found.isDeleted) {
        await this.articlesService.updateReactionsCount(articleId, -1);
      } else {
        await this.articlesService.updateReactionsCount(articleId, 1);
      }

      return this.stripKeys(found, ['reaction', 'isDeleted']);
    }

    const reaction = new Reaction();
    reaction.articleId = articleId;

    await reaction.save();
    await this.articlesService.updateReactionsCount(articleId, 1);

    return this.stripKeys(reaction, ['reaction', 'isDeleted']);
  }
}
