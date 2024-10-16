import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserCreateRequestDto } from './DTO/user-create-request.dto';
import { AuthService } from './auth.service';
import { UserLoginRequestDto } from 'src/user/DTO/login-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() userDto: UserCreateRequestDto) {
    await this.authService.signUp(userDto);
    
    return { suscces: true, message:"회원가입에 성공했습니다."}
  }

  @Post('signin')
  async signin(@Body() userDto: UserLoginRequestDto) {
    const token = await this.authService.signIn(userDto);
    return {success: true, message: "로그인 성공", token: token.accessToken} 
  }

  // @Delete()

}
