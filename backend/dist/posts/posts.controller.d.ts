import { PostsService } from './posts.service';
import { PostCreateRequestDto } from './DTO/post.createRequest.dto';
import { User } from 'src/user/entities/create-user.entity';
export declare class PostsController {
    private postServices;
    constructor(postServices: PostsService);
    getAllPosts(): Promise<import("./entities/create.post.entity").Post[]>;
    getOnePost(post_pk: number): Promise<import("./entities/create.post.entity").Post>;
    createPost(createPostdto: PostCreateRequestDto, user: User): Promise<void>;
    deletePost(): void;
    updatePost(): void;
}
