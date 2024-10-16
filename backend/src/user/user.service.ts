import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/create-user.entity';
import { UserCreateRequestDto } from 'src/auth/DTO/user-create-request.dto';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findUser(uid: string) {
    return this.userRepository.findOneBy({ uid });
  }

  async createUser(userCreateDto: UserCreateRequestDto): Promise<void> {
    const { uid, password } = userCreateDto;

    // 가입된 회원 검증 필요

    const salt = await bcrypt.genSalt(); // salt 생성
    const hashedPassword = await bcrypt.hash(password, salt); // password와 salt를 이용해 hash 생성    
    const user = this.userRepository.create({ uid, password:hashedPassword });
    await this.userRepository.save(user);
  }

}
