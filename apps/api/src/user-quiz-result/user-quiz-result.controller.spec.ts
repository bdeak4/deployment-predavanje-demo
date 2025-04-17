import { Test, TestingModule } from '@nestjs/testing';
import { UserQuizResultController } from './user-quiz-result.controller';
import { UserQuizResultService } from './user-quiz-result.service';

describe('UserQuizResultController', () => {
  let controller: UserQuizResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserQuizResultController],
      providers: [UserQuizResultService],
    }).compile();

    controller = module.get<UserQuizResultController>(UserQuizResultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
