import { IsString, IsNotEmpty, IsEnum, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
  @ApiProperty({
    example: 'First World Cup was held in 1930',
    description: 'Answer text',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty({
    example: false,
    description: 'Indicates if the answer is correct or not',
    type: 'boolean',
  })
  @IsBoolean()
  isCorrect: boolean;

  @ApiProperty({ description: 'Question ID', type: 'string' })
  @IsNotEmpty()
  @IsString()
  questionId: string;
}
