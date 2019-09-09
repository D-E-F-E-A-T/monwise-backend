import { Controller } from '@nestjs/common';
import { Article } from './article.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { ArticlesService } from './articles.service';

@Crud({
  model: {
    type: Article,
  },
})
@Controller('articles')
export class ArticlesController implements CrudController<Article> {
  constructor(public service: ArticlesService) {}
}
