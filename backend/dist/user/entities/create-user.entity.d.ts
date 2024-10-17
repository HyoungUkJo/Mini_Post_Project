import { Comment } from "src/comments/entities/comments.entity";
import { Post } from "src/posts/entities/create.post.entity";
import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    user_pk: number;
    uid: string;
    password: string;
    posts: Post[];
    comments: Comment[];
}
