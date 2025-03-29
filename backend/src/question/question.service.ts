import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class QuestionService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createQuestionDto: CreateQuestionDto) {
    return this.databaseService.question.create({
      data: createQuestionDto,
    });
  }

  async findAll() {
    return this.databaseService.question.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.question.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    return this.databaseService.question.update({
      where: { id },
      data: updateQuestionDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.question.delete({
      where: { id },
    });
  }
}
