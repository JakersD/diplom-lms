import { IsString, MinLength } from 'class-validator';

import { ERole } from '../interfaces/users.interface';

export class AuthCredentialsDto {
    @IsString()
    username: string;

    @IsString()
    @MinLength(8, { message: 'Пароль слишком короткий (минимально 8 символов)' })
    password: string;

    @IsString()
    role: ERole;

    facultyId: string;
}
