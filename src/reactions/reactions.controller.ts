import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Reaction } from './reaction.entity';
import { ReactionsService } from './reactions.service';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Reaction,
  },
  params: {
    articleId: {
      type: 'uuid',
      field: 'articleId',
    },
  },
})
@ApiUseTags('reactions')
@Controller('articles/:articleId/reactions')
export class ReactionsController implements CrudController<Reaction> {
  constructor(public service: ReactionsService) {}
}
