import { Module } from '@nestjs/common';
import { UserQuizResultService } from './user-quiz-result.service';
import { UserQuizResultController } from './user-quiz-result.controller';

@Module({
  controllers: [UserQuizResultController],
  providers: [UserQuizResultService],
})
export class UserQuizResultModule {}
