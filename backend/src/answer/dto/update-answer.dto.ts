import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAnswerDto } from './create-answer.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateAnswerDto extends PartialType(CreateAnswerDto) {
  @ApiProperty({
    example: 'The first World Cup was held in 1930',
    description: 'Answer text',
    type: 'string',
  })
  @IsString()
  @IsOptional()
  text?: string;

  @ApiProperty({
    example: false,
    description: 'Indicates if the answer is correct or not',
    type: 'boolean',
  })
  @IsBoolean()
  @IsOptional()
  isCorrect?: boolean;
}
