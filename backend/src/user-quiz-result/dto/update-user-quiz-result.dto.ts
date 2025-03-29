import { PartialType } from '@nestjs/swagger';
import { CreateUserQuizResultDto } from './create-user-quiz-result.dto';

export class UpdateUserQuizResultDto extends PartialType(CreateUserQuizResultDto) {}
