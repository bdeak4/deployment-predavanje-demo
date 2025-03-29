import { Injectable } from '@nestjs/common';
import { CreateUserQuizResultDto } from './dto/create-user-quiz-result.dto';
import { UpdateUserQuizResultDto } from './dto/update-user-quiz-result.dto';

@Injectable()
export class UserQuizResultService {
  create(createUserQuizResultDto: CreateUserQuizResultDto) {
    return 'This action adds a new userQuizResult';
  }

  findAll() {
    return `This action returns all userQuizResult`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userQuizResult`;
  }

  update(id: number, updateUserQuizResultDto: UpdateUserQuizResultDto) {
    return `This action updates a #${id} userQuizResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} userQuizResult`;
  }
}
