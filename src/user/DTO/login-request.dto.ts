import { IsString } from 'class-validator';

export class UserLoginRequestDto {
  @IsString()
  uid: string;

  @IsString()
  password: string;
}
