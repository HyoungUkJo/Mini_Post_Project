import { IsString } from "class-validator";

export class PostCreateRequestDto {
    @IsString()
    title: string;

    @IsString()
    content: string;
}