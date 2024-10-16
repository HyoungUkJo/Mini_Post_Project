"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProvider = void 0;
const create_post_entity_1 = require("./entities/create.post.entity");
exports.postProvider = [
    {
        provide: 'POST_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(create_post_entity_1.Post),
        inject: ['DATA_SOURCE']
    }
];
//# sourceMappingURL=posts.provider.js.map