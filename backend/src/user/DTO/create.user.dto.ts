import { IsString } from 'class-validator';

export class UserCreateRequestDto {
  @IsString()
  uid: string;

  @IsString()
  password: string;

//   @IsString()
//   email: string
}
