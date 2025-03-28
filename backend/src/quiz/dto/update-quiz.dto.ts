import { IsString, IsOptional, IsEnum } from 'class-validator';
import { QuizCategory } from '@prisma/client';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateQuizDto } from './create-quiz.dto';

export class UpdateQuizDto extends PartialType(CreateQuizDto) {
  @ApiProperty({
    example: 'Football quiz',
    description: 'Quiz title',
    type: 'string',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    example:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Panthera_tigris_tigris.jpg',
    description: 'Quiz image URL',
    type: 'string',
  })
  @IsString()
  @IsOptional()
  img?: string;

  @ApiProperty({ description: 'Quiz ID', type: 'string' })
  @IsEnum(QuizCategory)
  @IsOptional()
  categoryId?: string;
}
