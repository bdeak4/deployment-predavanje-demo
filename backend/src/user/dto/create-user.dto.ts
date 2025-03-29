import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Josip',
    description: 'User name',
    type: 'string',
  })
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'User email',
    type: 'string',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'securepassword123',
    description: 'User password',
    type: 'string',
  })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: 'USER',
    enum: UserRole,
    description: 'User role',
    type: 'string',
  })
  @IsEnum(UserRole)
  role: UserRole;
}
