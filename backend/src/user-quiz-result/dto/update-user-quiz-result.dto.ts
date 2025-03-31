import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserQuizResultDto {
  @ApiProperty({
    example: 4,
    description: 'Score of the user in the quiz',
    type: 'number',
  })
  @IsInt({ message: 'Score must be an integer' })
  @Min(0, { message: 'Score must be a positive number' })
  @IsNotEmpty({ message: 'Score is required' })
  score: number;
}
