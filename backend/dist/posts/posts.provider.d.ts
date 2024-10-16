import { DataSource } from 'typeorm';
import { Post } from './entities/create.post.entity';
export declare const postProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Post>;
    inject: string[];
}[];
