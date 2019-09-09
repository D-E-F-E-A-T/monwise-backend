import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TagsModule],
})
export class AppModule {}
