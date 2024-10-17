import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { DatabaseModule } from 'src/database/database.module';
import { commentsProvider } from './comments.provider';
import { postProvider } from 'src/posts/posts.provider';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [CommentsController],
  providers: [CommentsService,...commentsProvider, ...postProvider]
})
export class CommentsModule {}
