import { Post } from "src/posts/entities/create.post.entity";
import { BaseEntity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Auth extends BaseEntity{
    @PrimaryGeneratedColumn()
    user_pk: number;

    @Column()
    uid: string;

    @Column()
    password: string;
}