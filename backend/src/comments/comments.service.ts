import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Comment } from './entities/comments.entity';
import { User } from 'src/user/entities/create-user.entity';
import { Post } from 'src/posts/entities/create.post.entity';

@Injectable()
export class CommentsService {
  constructor(
    @Inject('COMMENT_REPOSITORY')
    private commentRepository: Repository<Comment>,
    @Inject('POST_REPOSITORY')
    private postRepository: Repository<Post>,
  ) {}

  async createComment(post_pk: number, comment: string, user: User) {
    const post = await this.postRepository.findOneBy({ post_pk });
    console.log(user);
    const new_comment = this.commentRepository.create({ comment, user, post });

    return await this.commentRepository.save(new_comment);
  }

  async updateComment(comment_pk: number, comment: string) {
    const new_comment = await this.commentRepository.findOneBy({ comment_pk });
    new_comment.comment = comment;

    return this.commentRepository.save(new_comment);
  }

  async deleteComment(comment_pk: number) {
    const result = await this.commentRepository.delete({ comment_pk });

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${comment_pk}`);
    }
  }
}
