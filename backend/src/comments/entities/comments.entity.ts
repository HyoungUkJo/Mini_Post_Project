import { Post } from 'src/posts/entities/create.post.entity';
import { User } from 'src/user/entities/create-user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  comment_pk: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @ManyToOne((type) => Post, (post) => post.post_pk, { eager: false })
  post: Post;

  @ManyToOne((type) => User, (user) => user.user_pk, { eager: false })
  user: User;
}
