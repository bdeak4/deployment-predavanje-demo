import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { QuizCategory } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizDto {
  @ApiProperty({
    example: 'Football quiz',
    description: 'Quiz title',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Emirates_Stadium_Arsenal.jpg',
    description: 'Quiz image URL',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  img: string;

  @ApiProperty({ description: 'Quiz ID', type: 'string' })
  @IsEnum(QuizCategory)
  @IsNotEmpty()
  categoryId: string;
}
