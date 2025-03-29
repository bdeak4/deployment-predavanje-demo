import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { IsEmail, IsEnum, IsOptional, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    example: 'Josip',
    description: 'User name',
    type: 'string',
  })
  @IsOptional()
  @MinLength(3)
  name: string;

  @ApiProperty({ example: 'newuser@example.com', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: 'newpassword123', required: false })
  @IsOptional()
  @MinLength(6)
  password?: string;

  @ApiProperty({ example: 'ADMIN', enum: UserRole, required: false })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
