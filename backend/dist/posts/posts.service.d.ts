import { Repository } from 'typeorm';
import { Post } from './entities/create.post.entity';
import { PostCreateRequestDto } from './DTO/post.createRequest.dto';
import { User } from 'src/user/entities/create-user.entity';
export declare class PostsService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    getAllPosts(): Promise<Post[]>;
    getOnePost(post_pk: number): Promise<Post>;
    createPost(createPostdto: PostCreateRequestDto, user: User): Promise<void>;
    deletePost(post_pk: number, user: User): Promise<void>;
    updatePost(post_pk: number, updateRequestDto: PostCreateRequestDto): Promise<void>;
}
