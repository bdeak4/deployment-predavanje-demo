import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AnswerService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createAnswerDto: CreateAnswerDto) {
    return this.databaseService.answer.create({
      data: createAnswerDto,
    });
  }

  async findAll() {
    return this.databaseService.answer.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.answer.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateAnswerDto: UpdateAnswerDto) {
    return this.databaseService.answer.update({
      where: { id },
      data: updateAnswerDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.answer.delete({
      where: { id },
    });
  }
}
