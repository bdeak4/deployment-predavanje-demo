import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateQuestionDto } from './create-question.dto';
import { QuestionType } from '@prisma/client';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {
  @ApiProperty({
    example: 'When was the first World Cup held?',
    description: 'Question text',
    type: 'string',
  })
  @IsString({ message: 'Text must be a string' })
  @IsOptional()
  text?: string;

  @ApiProperty({
    example: 'MULTIPLE_CHOICE',
    description: 'Question type',
    enum: QuestionType,
  })
  @IsEnum(QuestionType, {
    message:
      'Type must be one of the following: MULTIPLE_CHOICE, TRUE_FALSE, FILL_IN_THE_BLANK',
  })
  @IsOptional()
  type?: QuestionType;
}
