import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { ArticlesModule } from './articles/articles.module';
import { CommentsModule } from './comments/comments.module';
import { ReactionsModule } from './reactions/reactions.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TagsModule, ArticlesModule, CommentsModule, ReactionsModule],
})
export class AppModule {}
