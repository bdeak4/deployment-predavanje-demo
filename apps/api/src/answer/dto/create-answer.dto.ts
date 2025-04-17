import { IsString, IsNotEmpty, IsEnum, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
  @ApiProperty({
    example: 'First World Cup was held in 1930',
    description: 'Answer text',
    type: 'string',
  })
  @IsString({ message: 'Text must be a string' })
  @IsNotEmpty({ message: 'Text is required' })
  text: string;

  @ApiProperty({
    example: false,
    description: 'Indicates if the answer is correct or not',
    type: 'boolean',
  })
  @IsBoolean({ message: 'isCorrect must be a boolean' })
  @IsNotEmpty({ message: 'isCorrect is required' })
  isCorrect: boolean;

  @ApiProperty({ description: 'Question ID', type: 'string' })
  @IsString({ message: 'Question ID must be a string' })
  @IsNotEmpty({ message: 'Question ID is required' })
  questionId: string;
}
