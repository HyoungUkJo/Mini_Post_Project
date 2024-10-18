import { Exclude } from "class-transformer";
import { Comment } from "src/comments/entities/comments.entity";
import { Post } from "src/posts/entities/create.post.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['uid'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    user_pk: number;

    @Column()
    uid: string;

    @Column()
    password: string;

    @OneToMany(type=>Post, (post)=>post.user, {eager:true})
    posts: Post[];

    @OneToMany((type)=>Comment, (comment) => comment.user, {eager:true})
    comments: Comment[];

}