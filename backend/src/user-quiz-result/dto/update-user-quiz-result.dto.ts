import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserQuizResultDto {
  @ApiProperty({
    example: 4,
    description: 'Score of the user in the quiz',
    type: 'number',
  })
  @IsNumber(
    { allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 },
    { message: 'Score must be a number' },
  )
  @IsNotEmpty({ message: 'Score is required' })
  score: number;
}
