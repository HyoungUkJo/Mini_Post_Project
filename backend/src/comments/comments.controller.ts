import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/user/entities/create-user.entity';
import { GetUser } from 'src/user/get.user.decorator';
import { CommentsService } from './comments.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('comments')
@UseGuards(AuthGuard())
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post(':post_pk')
  createComment(
    @Param('post_pk') post_pk: number,
    @Body() dto,
    @GetUser() user: User,
  ) {
    const comment = dto.comment;
    this.commentsService.createComment(post_pk, comment, user);

    return { success: true, message: '작성 성공' };
  }

  @Patch(':comment_pk')
  updateComment(@Param('comment_pk') comment_pk: number, @Body() dto) {
    const comment = dto.comment;
    this.commentsService.updateComment(comment_pk, comment);

    return { success: true, message: '수정 성공' };
  }

  @Delete(':comment_pk')
  deleteComment(@Param('comment_pk') comment_pk: number) {
    this.commentsService.deleteComment(comment_pk);

    return { success: true, message: '삭제 성공' };
  }
}
