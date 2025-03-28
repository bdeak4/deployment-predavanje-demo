import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class QuizService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createQuizDto: CreateQuizDto) {
    return this.databaseService.quiz.create({
      data: createQuizDto,
    });
  }

  async findAll() {
    return this.databaseService.quiz.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.quiz.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateQuizDto: UpdateQuizDto) {
    return this.databaseService.quiz.update({
      where: { id },
      data: updateQuizDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.quiz.delete({
      where: { id },
    });
  }
}
