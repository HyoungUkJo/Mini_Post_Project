import { Injectable } from '@nestjs/common';
import { AuthDto } from './DTO/auth.dto';
import { Auth } from './entities/create.auth.entity';

@Injectable()
export class AuthService {

    async signIn(authDTo: AuthDto): Promise<Auth> {
        return
    }
}
