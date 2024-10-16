"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let PostsService = class PostsService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async getAllPosts() {
        const post = await this.postRepository
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.user', 'user')
            .select([
            'post.post_pk',
            'post.title',
            'post.content',
            'post.create_at',
            'post.update_at',
            'user.uid',
        ])
            .getMany();
        return post;
    }
    getOnePost(post_pk) {
        return this.postRepository.findOneBy({ post_pk });
    }
    async createPost(createPostdto, user) {
        const { title, content } = createPostdto;
        const post = this.postRepository.create({
            title,
            content,
            user,
        });
        await this.postRepository.save(post);
    }
    deletePost() { }
    async updatePost(post_pk, updateRequestDto) {
        const { title, content } = updateRequestDto;
        const post = await this.getOnePost(post_pk);
        post.title = title;
        post.content = content;
        await this.postRepository.save(post);
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('POST_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map