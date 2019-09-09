import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Comment } from './comment.entity';
import { CommentsService } from './comments.service';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Comment,
  },
  params: {
    articleId: {
      type: 'string',
      field: 'articleId',
    },
  },
})
@ApiUseTags('comments')
// @Controller('comments')
@Controller('/articles/:articleId/comments')
export class CommentsController implements CrudController<Comment> {
  constructor(public service: CommentsService) {}
}
