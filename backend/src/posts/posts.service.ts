import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './entities/create.post.entity';
import { CreatePostDto } from './DTO/post.create.dto';
import { PostCreateRequestDto } from './DTO/post.createRequest.dto';
import { User } from 'src/user/entities/create-user.entity';

@Injectable()
export class PostsService {
  //db모듈 의존성 주입
  constructor(
    @Inject('POST_REPOSITORY')
    private postRepository: Repository<Post>,
  ) {}

  // 전체 게시글 조회
  async getAllPosts(): Promise<Post[]> {
    const post = await this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.user', 'user')
      .select([
        'post.post_pk',
        'post.title',
        'post.content',
        'post.create_at',
        'post.update_at',
        'user.uid',
      ])
      .getMany();
    return post;
    // return this.postRepository.find();
  }

  //상세 게시글 조회
  getOnePost(post_pk: number): Promise<Post> {
    return this.postRepository.findOneBy({ post_pk });
  }

  // 게시글 작성
  /* 
   * 요청한 사용자 정보 필요
      -> 어떻게 가지고 올것인가? 이전에 구현했던것처럼 커스텀 데코레이터를 통해서 할 것인지?
      -> db에서 읽어올 것인지?
    일단 영상에서 했던 방식으로 하돼 db에서 읽어오는 방식이 아닌걸로 해보자.

   * 요청 시간 필요
    -> Date관련 함수가 있을듯 이를 활용하자.-> 해결 CreateDateColum()을 통해서 해결완료
  */
  async createPost(
    createPostdto: PostCreateRequestDto,
    user: User,
  ): Promise<void> {
    const { title, content } = createPostdto;

    const post = this.postRepository.create({
      title,
      content,
      user,
    });

    await this.postRepository.save(post);
  }

  // 게시글 삭제
  deletePost() {}

  // 게시글 수정
  async updatePost(
    post_pk: number,
    updateRequestDto: PostCreateRequestDto,
  ): Promise<void> {
    const { title, content } = updateRequestDto;
    const post = await this.getOnePost(post_pk);
    post.title = title;
    post.content = content;
    await this.postRepository.save(post);
  }
}
