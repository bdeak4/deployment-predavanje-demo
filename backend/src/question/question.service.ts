import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class QuestionService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createQuestionDto: CreateQuestionDto) {
    return this.databaseService.question.create({
      data: createQuestionDto,
    });
  }

  findAll() {
    return this.databaseService.question.findMany();
  }

  findOne(id: string) {
    return this.databaseService.question.findUnique({
      where: { id },
    });
  }

  update(id: string, updateQuestionDto: UpdateQuestionDto) {
    return this.databaseService.question.update({
      where: { id },
      data: updateQuestionDto,
    });
  }

  remove(id: string) {
    return this.databaseService.question.delete({
      where: { id },
    });
  }
}
