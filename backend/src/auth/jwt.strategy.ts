import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/user/entities/create-user.entity';
import { Repository, Unique } from 'typeorm';
import * as config from 'config'; // config 모듈 import 필요
import { UserService } from 'src/user/user.service';

// const jwtConfig = config.get('jwt'); // 

/* PassportStrategy 기능 사용을 위해 상속(extends) */
/* Strategy는 passport-jwt에서 받아온 정책변수? */
// nestjs의 Passport 정책을

@Injectable()
// @Unique(['username'])
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userRepository: UserService,
  ) {
    super({
      secretOrKey: 'Secret1!', // 토큰 유효 확인
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 토큰이 어디에서 오냐 -> extractJwt에 bearertoken 타입으로 온다.
    });
  }

  async validate(payload){
    const {username} = payload;
    const user:User = await this.userRepository.findUser(username);

    if(!user){
        throw new UnauthorizedException();
    }

    return user;
  }
}
