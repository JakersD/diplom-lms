import { SetMetadata } from '@nestjs/common';
import { ERole } from '../interfaces/users.interface';

export const ROLE_KEY = 'roles';
export const Role = (role: ERole) => SetMetadata(ROLE_KEY, role);
