import { DataSource } from 'typeorm';
import { Comment } from './entities/comments.entity';

export const commentsProvider = [
  {
    provide: 'COMMENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Comment),
    inject: ['DATA_SOURCE'],
  },
];
