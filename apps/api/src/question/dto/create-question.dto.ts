import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { QuestionType } from '@prisma/client';

export class CreateQuestionDto {
  @ApiProperty({
    example: 'When was the first World Cup held?',
    description: 'Question text',
    type: 'string',
  })
  @IsString({ message: 'Text must be a string' })
  @IsNotEmpty({ message: 'Text is required' })
  text: string;

  @ApiProperty({
    example: 'MULTIPLE_CHOICE',
    description: 'Question type',
    enum: QuestionType,
  })
  @IsEnum(QuestionType, {
    message:
      'Type must be one of the following: MULTIPLE_CHOICE, TRUE_FALSE, FILL_IN_THE_BLANK',
  })
  @IsNotEmpty({ message: 'Type is required' })
  type: QuestionType;

  @ApiProperty({ description: 'Quiz ID', type: 'string' })
  @IsString({ message: 'Quiz ID must be a string' })
  @IsNotEmpty({ message: 'Quiz ID is required' })
  quizId: string;
}
