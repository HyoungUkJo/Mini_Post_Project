import { Strategy } from 'passport-jwt';
import { User } from 'src/user/entities/create-user.entity';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserService);
    validate(payload: any): Promise<User>;
}
export {};
