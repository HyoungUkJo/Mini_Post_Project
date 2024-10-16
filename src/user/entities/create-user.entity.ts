import { Exclude } from "class-transformer";
import { Post } from "src/posts/entities/create.post.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    user_pk: number;

    @Column()
    uid: string;

    @Column()
    @Exclude({ toPlainOnly: true }) //post에서 User에 대해서 접근하려고 할떄 password는 제외된다. -> 바로 접근하는것은 말이 안되는듯? 접근한다면 auth를 통해서 한다면 말이된다고 생각한다.
    password: string;

    @OneToMany(type=>Post, (post)=>post.user, {eager:true})
    posts: Post[];
}