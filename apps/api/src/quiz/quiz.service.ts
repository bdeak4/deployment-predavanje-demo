import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class QuizService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createQuizDto: CreateQuizDto) {
    const existingQuizTitle = await this.databaseService.quiz.findUnique({
      where: { title: createQuizDto.title },
    });

    if (existingQuizTitle)
      throw new BadRequestException('Quiz title already exists');

    return this.databaseService.quiz.create({
      data: createQuizDto,
    });
  }

  async findAll(title?: string, categoryId?: string) {
    return this.databaseService.quiz.findMany({
      where: {
        ...(title && { title: { contains: title, mode: 'insensitive' } }),
        ...(categoryId && { categoryId }),
      },
    });
  }

  async findOne(id: string) {
    const quiz = await this.databaseService.quiz.findUnique({
      where: { id },
    });

    if (!quiz) throw new NotFoundException('Quiz not found');

    return quiz;
  }

  async update(id: string, updateQuizDto: UpdateQuizDto) {
    const quiz = await this.databaseService.quiz.findUnique({
      where: { id },
    });

    if (!quiz) throw new BadRequestException('Quiz not found');

    if (updateQuizDto.title) {
      const existingQuizTitle = await this.databaseService.quiz.findUnique({
        where: { title: updateQuizDto.title },
      });
      if (existingQuizTitle)
        throw new BadRequestException('Quiz title already exists');
    }

    return this.databaseService.quiz.update({
      where: { id },
      data: updateQuizDto,
    });
  }

  async remove(id: string) {
    const quiz = await this.databaseService.quiz.findUnique({ where: { id } });

    if (!quiz) throw new BadRequestException('Quiz not found');

    return this.databaseService.quiz.delete({
      where: { id },
    });
  }
}
