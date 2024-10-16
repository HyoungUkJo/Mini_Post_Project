import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { postProvider } from './posts.provider';
import { PostsController } from './posts.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [PostsController],
  providers: [PostsService, ...postProvider],
})
export class PostsModule {}
