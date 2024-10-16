import { Repository } from 'typeorm';
import { User } from './entities/create-user.entity';
import { UserCreateRequestDto } from 'src/auth/DTO/user-create-request.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findUser(uid: string): Promise<User>;
    createUser(userCreateDto: UserCreateRequestDto): Promise<void>;
}
