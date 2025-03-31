import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AnswerService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createAnswerDto: CreateAnswerDto) {
    const existingAnswer = await this.databaseService.answer.findFirst({
      where: {
        text: createAnswerDto.text,
        questionId: createAnswerDto.questionId,
      },
    });

    if (existingAnswer)
      throw new Error('Answer already exists for this question');

    return this.databaseService.answer.create({
      data: createAnswerDto,
    });
  }

  async findAll() {
    return this.databaseService.answer.findMany();
  }

  async findOne(id: string) {
    const answer = await this.databaseService.answer.findUnique({
      where: { id },
    });

    if (!answer) throw new Error('Answer not found');

    return answer;
  }

  async update(id: string, updateAnswerDto: UpdateAnswerDto) {
    const answer = await this.databaseService.answer.findUnique({
      where: { id },
    });

    if (!answer) throw new Error('Answer not found');

    if (updateAnswerDto.text) {
      const existingAnswerText = await this.databaseService.answer.findFirst({
        where: {
          text: updateAnswerDto.text,
          questionId: answer.questionId,
        },
      });

      if (existingAnswerText)
        throw new Error('Answer already exists for this question');
    }

    return this.databaseService.answer.update({
      where: { id },
      data: updateAnswerDto,
    });
  }

  async remove(id: string) {
    const answer = await this.databaseService.answer.findUnique({
      where: { id },
    });

    if (!answer) throw new Error('Answer not found');

    return this.databaseService.answer.delete({
      where: { id },
    });
  }
}
