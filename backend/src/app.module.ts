import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { QuizModule } from './quiz/quiz.module';
import { CategoryModule } from './category/category.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { UserQuizResultModule } from './user-quiz-result/user-quiz-result.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, DatabaseModule, QuizModule, CategoryModule, QuestionModule, AnswerModule, UserQuizResultModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
