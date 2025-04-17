import { IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SearchQuizDto {
  @ApiProperty({
    example: 'football',
    description: 'Quiz title search parametar',
    type: 'string',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  title?: string;

  @ApiProperty({
    description: 'Quiz category ID',
    type: 'string',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Category ID must be a string' })
  categoryId?: string;
}
