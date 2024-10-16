import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { UserCreateRequestDto } from './DTO/user-create-request.dto';
import { User } from 'src/user/entities/create-user.entity';
import { UserService } from 'src/user/user.service';
import { UserLoginRequestDto } from 'src/user/DTO/login-request.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    // @Inject('AUTH_REPOSITORY')
    // private authRepository: Repository<Auth>,
    private userRepository: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(userCreateDto: UserCreateRequestDto): Promise<void> {
    this.userRepository.createUser(userCreateDto); // 비밀번호 해쉬화는 userService에서 처리하도록 함
  }

  // 성공했을 시 토큰을 return 해야함. 성공 시 토큰 반환
  // 리턴타입도 이에 맞게 변환
  async signIn(userLoginDto: UserLoginRequestDto): Promise<{accessToken: string}> {
    const { uid, password } = userLoginDto;
    const user = await this.userRepository.findUser(uid);
    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 (Secret+Payload)
      const payload = { uid }; //username으로 보내는건 취약하지 않나?
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('login fail');
    }
  }
}
