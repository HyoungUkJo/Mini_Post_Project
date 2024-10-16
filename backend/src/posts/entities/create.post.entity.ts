import { Comment } from 'src/comments/entities/comments.entity';
import { User } from 'src/user/entities/create-user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post extends BaseEntity {
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

  @ManyToOne((type) => User, (user) => user.user_pk, { eager: false })
  user: User;
  
  @OneToMany((type)=>Comment, (comment) => comment.post, {eager:true})
  comments: Comment[];
}
