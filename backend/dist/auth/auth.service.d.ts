import { UserCreateRequestDto } from './DTO/user-create-request.dto';
import { UserService } from 'src/user/user.service';
import { UserLoginRequestDto } from 'src/user/DTO/login-request.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserService, jwtService: JwtService);
    signUp(userCreateDto: UserCreateRequestDto): Promise<void>;
    signIn(userLoginDto: UserLoginRequestDto): Promise<{
        accessToken: string;
    }>;
}
