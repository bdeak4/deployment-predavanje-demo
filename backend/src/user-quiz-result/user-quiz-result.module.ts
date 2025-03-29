import { Module } from '@nestjs/common';
import { UserQuizResultService } from './user-quiz-result.service';
import { UserQuizResultController } from './user-quiz-result.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserQuizResultController],
  providers: [UserQuizResultService],
})
export class UserQuizResultModule {}
