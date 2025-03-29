import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserQuizResultDto {
  @ApiProperty({
    example: 4,
    description: 'Score of the user in the quiz',
    type: 'number',
  })
  @IsNumber()
  @IsNotEmpty()
  score: number;
}
