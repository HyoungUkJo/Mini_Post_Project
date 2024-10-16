import { User } from 'src/user/entities/create-user.entity';
import { BaseEntity } from 'typeorm';
export declare class Post extends BaseEntity {
    post_pk: number;
    title: string;
    content: string;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
    user: User;
}
