import { UserCreateRequestDto } from './DTO/user-create-request.dto';
import { AuthService } from './auth.service';
import { UserLoginRequestDto } from 'src/user/DTO/login-request.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(userDto: UserCreateRequestDto): Promise<{
        suscces: boolean;
        message: string;
    }>;
    signin(userDto: UserLoginRequestDto): Promise<{
        success: boolean;
        message: string;
        token: string;
    }>;
}
