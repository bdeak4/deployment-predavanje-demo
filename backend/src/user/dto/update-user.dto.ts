import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { IsEmail, IsEnum, IsOptional, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    example: 'Josip',
    required: false,
  })
  @IsOptional()
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  name?: string;

  @ApiProperty({ example: 'newuser@example.com', required: false })
  @IsOptional()
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email?: string;

  @ApiProperty({ example: 'newpassword123', required: false })
  @IsOptional()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password?: string;

  @ApiProperty({ example: 'ADMIN', enum: UserRole, required: false })
  @IsOptional()
  @IsEnum(UserRole, {
    message: 'Role must be one of the following: USER, ADMIN',
  })
  role?: UserRole;
}
