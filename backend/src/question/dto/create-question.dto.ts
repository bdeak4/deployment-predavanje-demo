import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { QuestionType } from '@prisma/client';

export class CreateQuestionDto {
  @ApiProperty({
    example: 'When was the first World Cup held?',
    description: 'Question text',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty({
    example: 'MULTIPLE_CHOICE',
    description: 'Question type',
    enum: QuestionType,
  })
  @IsEnum(QuestionType)
  type: QuestionType;

  @ApiProperty({ description: 'Quiz ID', type: 'string' })
  @IsNotEmpty()
  @IsString()
  quizId: string;
}
