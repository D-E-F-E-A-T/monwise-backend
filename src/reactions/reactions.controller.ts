import { Controller, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  Crud,
  CrudController,
  ParsedBody,
  Override,
  ParsedRequest,
  CrudRequest,
} from '@nestjsx/crud';
import { Reaction } from './reaction.entity';
import { ReactionsService } from './reactions.service';
import { ApiUseTags } from '@nestjs/swagger';
import { ArticlesService } from '../articles/articles.service';

@Crud({
  model: {
    type: Reaction,
  },
  params: {
    articleId: {
      type: 'uuid',
      field: 'articleId',
    },
    id: {
      type: 'uuid',
      field: 'id',
      primary: true,
    },
  },
})
@ApiUseTags('reactions')
@Controller('articles/:articleId/reactions')
export class ReactionsController implements CrudController<Reaction> {
  constructor(
    public service: ReactionsService,
    private articleService: ArticlesService,
  ) {}

  get base(): CrudController<Reaction> {
    return this;
  }

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @Param('articleId', ParseUUIDPipe) articleId: string,
  ) {
    return this.service.createReaction(articleId);
  }
}
