import { Injectable } from '@nestjs/common';
import { CreateUserQuizResultDto } from './dto/create-user-quiz-result.dto';
import { DatabaseService } from 'src/database/database.service';
import { UpdateUserQuizResultDto } from './dto/update-user-quiz-result.dto';

@Injectable()
export class UserQuizResultService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createUserQuizResultDto: CreateUserQuizResultDto) {
    return this.databaseService.userQuizResult.create({
      data: createUserQuizResultDto,
    });
  }

  async findAll() {
    return this.databaseService.userQuizResult.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.userQuizResult.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateUserQuizResultDto: UpdateUserQuizResultDto) {
    return this.databaseService.userQuizResult.update({
      where: { id },
      data: updateUserQuizResultDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.userQuizResult.delete({
      where: { id },
    });
  }
}
