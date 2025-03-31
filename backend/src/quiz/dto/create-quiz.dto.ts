import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizDto {
  @ApiProperty({
    example: 'Football quiz',
    description: 'Quiz title',
    type: 'string',
  })
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @ApiProperty({
    example:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Emirates_Stadium_Arsenal.jpg',
    description: 'Quiz image URL',
    type: 'string',
  })
  @IsString({ message: 'Image URL must be a string' })
  @IsNotEmpty({ message: 'Image URL is required' })
  img: string;

  @ApiProperty({ description: 'Quiz category ID', type: 'string' })
  @IsString({ message: 'Category ID must be a string' })
  @IsNotEmpty({ message: 'Category ID is required' })
  categoryId: string;
}
