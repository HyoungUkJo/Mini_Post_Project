import { IsDate, IsNumber, IsString } from "class-validator";
import { User } from "src/user/entities/create-user.entity";

export class ResponeDto {
    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsString()
    comment: string;

    @IsDate()
    time: Date;
    
    @IsNumber()
    uid: number;
}