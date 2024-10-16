import { User } from "src/user/entities/create-user.entity";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Post extends BaseEntity{
    @PrimaryGeneratedColumn()
    post_pk: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    @DeleteDateColumn()
    delete_at: Date;

    @ManyToOne(type=>User, user=>user.posts, {eager: false})
    user:User;
}