import { Test, TestingModule } from '@nestjs/testing';
import { UserQuizResultService } from './user-quiz-result.service';

describe('UserQuizResultService', () => {
  let service: UserQuizResultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserQuizResultService],
    }).compile();

    service = module.get<UserQuizResultService>(UserQuizResultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
