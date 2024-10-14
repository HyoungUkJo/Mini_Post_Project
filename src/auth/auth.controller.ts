import { Body, Controller, Get } from '@nestjs/common';
import { AuthDto } from './DTO/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('login')
    signIn(@Body() authDto: AuthDto) {
        return this.authService.signIn(authDto);
    }

}
