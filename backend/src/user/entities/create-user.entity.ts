import { Exclude } from "class-transformer";
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
}