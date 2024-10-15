import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserCreateRequestDto } from './DTO/user-create-request.dto';
import { AuthService } from './auth.service';
import { UserLoginRequestDto } from 'src/user/DTO/login-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() userDto: UserCreateRequestDto) {
    return this.authService.signUp(userDto);
  }

  @Post('signin')
  signin(@Body() userDto: UserLoginRequestDto) {
    return this.authService.signIn(userDto);
  }

  // @Delete()

}
