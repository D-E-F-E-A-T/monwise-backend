import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Article } from './article.entity';
import { ArticlesService } from './articles.service';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Article,
  },
})
@ApiUseTags('articles')
@Controller('articles')
export class ArticlesController implements CrudController<Article> {
  constructor(public service: ArticlesService) {}
}
