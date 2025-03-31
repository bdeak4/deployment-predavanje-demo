import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Josip',
    description: 'User name',
    type: 'string',
  })
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'User email',
    type: 'string',
  })
  @IsEmail(
    { require_tld: true },
    { message: 'Email must be a valid email address' },
  )
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({
    example: 'securepassword123',
    description: 'User password',
    type: 'string',
  })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @ApiProperty({
    example: 'USER',
    enum: UserRole,
    description: 'User role',
    type: 'string',
  })
  @IsEnum(UserRole, {
    message: 'Role must be one of the following: USER, ADMIN',
  })
  @IsNotEmpty({ message: 'Role is required' })
  role: UserRole;
}
