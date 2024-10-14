import { IsString,  } from "class-validator";

export class AuthDto {
    @IsString()
    uid: string;

    @IsString()
    password: string;
}