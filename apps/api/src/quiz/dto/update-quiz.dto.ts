import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateQuizDto } from './create-quiz.dto';

export class UpdateQuizDto extends PartialType(CreateQuizDto) {
  @ApiProperty({
    example: 'Football quiz',
    description: 'Quiz title',
    type: 'string',
  })
  @IsString({ message: 'Title must be a string' })
  @IsOptional()
  title?: string;

  @ApiProperty({
    example:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Emirates_Stadium_Arsenal.jpg',
    description: 'Quiz image URL',
    type: 'string',
  })
  @IsString({ message: 'Image URL must be a string' })
  @IsOptional()
  img?: string;

  @ApiProperty({ description: 'Quiz category ID', type: 'string' })
  @IsString({ message: 'Category ID must be a string' })
  @IsOptional()
  categoryId?: string;
}
