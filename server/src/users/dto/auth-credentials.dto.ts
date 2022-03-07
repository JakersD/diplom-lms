import { IsString, MinLength } from 'class-validator';

export class AuthCredentialsDto {
    @IsString()
    @MinLength(7)
    readonly username: string;

    @IsString()
    @MinLength(6, { message: 'Пароль меньше 6-и символов' })
    readonly password: string;
}
