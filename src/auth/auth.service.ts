import { Inject, Injectable } from '@nestjs/common';
import { Auth } from './entities/create.auth.entity';
import { Repository } from 'typeorm';
import { UserCreateRequestDto } from './DTO/user-create-request.dto';
import { User } from 'src/user/entities/create-user.entity';
import { UserService } from 'src/user/user.service';
import { UserLoginRequestDto } from 'src/user/DTO/login-request.dto';

@Injectable()
export class AuthService {
  constructor(
    // @Inject('AUTH_REPOSITORY')
    // private authRepository: Repository<Auth>,
    private userRepository: UserService
  ) {}

  async signUp(userCreateDto: UserCreateRequestDto): Promise<void> {
    this.userRepository.createUser(userCreateDto);
  }

  // 성공했을 시 토큰을 return 해야함. 성공 시 토큰 반환 
  // 리턴타입도 이에 맞게 변환
  async signIn(userLoginDto: UserLoginRequestDto):Promise<void>{
    const {uid, password} = userLoginDto;
    const user = await this.userRepository.findUser(uid);
    console.log(user);
  }

}
