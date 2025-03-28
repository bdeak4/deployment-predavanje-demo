import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class QuizService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createQuizDto: CreateQuizDto) {
    return this.databaseService.quiz.create({
      data: createQuizDto,
    });
  }

  findAll() {
    return `This action returns all quiz`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quiz`;
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
