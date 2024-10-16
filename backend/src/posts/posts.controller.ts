import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostCreateRequestDto } from './DTO/post.createRequest.dto';
import { GetUser } from 'src/user/get.user.decorator';
import { User } from 'src/user/entities/create-user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
@UseGuards(AuthGuard())
export class PostsController {
  // PostsService 의존성 주입
  constructor(private postServices: PostsService) {}

  // 필요 api 기입
  //전체 게시글 조회 (최초화면)
  @Get()
  getAllPosts() {
    return this.postServices.getAllPosts();
  }

  //상세 게시글 조회
  @Get(':post_pk')
  getOnePost(@Param('post_pk') post_pk: number) {
    return this.postServices.getOnePost(post_pk);
  }

  // 게시글 작성
  @Post()
  createPost(
    @Body() createPostdto: PostCreateRequestDto,
    @GetUser() user: User,
  ) {
    console.log(createPostdto);
    this.postServices.createPost(createPostdto, user);
    return { success: true, message: '게시글 작성 성공' };
  }

  // 게시글 삭제
  @Delete(':post_pk')
  deletePost(@Param('post_pk') post_pk: number, @GetUser() user: User) {
    this.postServices.deletePost(post_pk, user);
    return { success: true, message: '삭제 성공' };
  }

  // 게시글 수정
  @Patch(':post_pk')
  updatePost(
    @Param('post_pk') post_pk: number,
    @Body() updateRequestDto: PostCreateRequestDto,
  ) {
    this.postServices.updatePost(post_pk, updateRequestDto);
    return { success: true, message: '게시글 수정 성공' };
  }
}
