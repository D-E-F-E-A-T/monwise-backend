import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Tag } from './tag.entity';
import { TagsService } from './tags.service';

@Crud({
  model: {
    type: Tag,
  },
})
@Controller('tags')
export class TagsController implements CrudController<Tag> {
  constructor(public service: TagsService) {}
}
