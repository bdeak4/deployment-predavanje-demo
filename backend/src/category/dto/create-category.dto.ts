import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'General Knowledge',
    description: 'Quiz category',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
