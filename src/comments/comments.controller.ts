import { Controller } from '@nestjs/common';
import {
  Crud,
  CrudController,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
} from '@nestjsx/crud';

import { Comment } from './comment.entity';
import { CommentsService } from './comments.service';
import { ApiUseTags } from '@nestjs/swagger';
import { ArticlesService } from '../articles/articles.service';

@Crud({
  model: {
    type: Comment,
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
@ApiUseTags('comments')
@Controller('/articles/:articleId/comments')
export class CommentsController implements CrudController<Comment> {
  constructor(
    public service: CommentsService,
    private articlesService: ArticlesService,
  ) {}

  get base(): CrudController<Comment> {
    return this;
  }

  @Override()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Comment,
  ): Promise<Comment> {
    const comment = await this.base.createOneBase(req, dto);
    this.articlesService.updateCommentsCount(comment.articleId);
    return comment;
  }
}
