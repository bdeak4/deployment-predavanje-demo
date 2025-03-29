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
  @IsString()
  @IsOptional()
  text?: string;

  @ApiProperty({
    example: 'MULTIPLE_CHOICE',
    description: 'Question type',
    enum: QuestionType,
  })
  @IsEnum(QuestionType)
  @IsOptional()
  type?: QuestionType;

  @ApiProperty({ description: 'Quiz ID', type: 'string' })
  @IsString()
  @IsOptional()
  quizId?: string;
}
