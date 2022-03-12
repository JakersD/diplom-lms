import { IsString, MinLength } from 'class-validator';

export class AuthCredentialsDto {
    @IsString()
    username: string;

    @IsString()
    @MinLength(8, { message: 'Пароль слишком короткий (минимально 8 символов)' })
    password: string;
}
