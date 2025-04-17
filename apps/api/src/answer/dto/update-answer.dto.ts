import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAnswerDto } from './create-answer.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateAnswerDto extends PartialType(CreateAnswerDto) {
  @ApiProperty({
    example: 'The first World Cup was held in 1930',
    description: 'Answer text',
    type: 'string',
  })
  @IsString({ message: 'Text must be a string' })
  @IsOptional()
  text?: string;

  @ApiProperty({
    example: false,
    description: 'Indicates if the answer is correct or not',
    type: 'boolean',
  })
  @IsBoolean({ message: 'isCorrect must be a boolean' })
  @IsOptional()
  isCorrect?: boolean;
}
