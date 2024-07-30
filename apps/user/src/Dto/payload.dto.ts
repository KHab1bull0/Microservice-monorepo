import { IsEmail, IsString } from "class-validator";

export class PayloadDto {
    @IsString()
    @IsEmail()
    email: string;
}