import { BadRequestException, Injectable } from '@nestjs/common';
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
    const userQuizResult = await this.databaseService.userQuizResult.findUnique(
      {
        where: { id },
      },
    );

    if (!userQuizResult)
      throw new BadRequestException('User quiz result not found');

    return userQuizResult;
  }

  async update(id: string, updateUserQuizResultDto: UpdateUserQuizResultDto) {
    const userQuizResult = await this.databaseService.userQuizResult.findUnique(
      {
        where: { id },
      },
    );

    if (!userQuizResult)
      throw new BadRequestException('User quiz result not found');

    return this.databaseService.userQuizResult.update({
      where: { id },
      data: updateUserQuizResultDto,
    });
  }

  async remove(id: string) {
    const userQuizResult = await this.databaseService.userQuizResult.findUnique(
      {
        where: { id },
      },
    );

    if (!userQuizResult)
      throw new BadRequestException('User quiz result not found');

    return this.databaseService.userQuizResult.delete({
      where: { id },
    });
  }

  async scoreLeaderboard() {
    const scores = await this.databaseService.userQuizResult.groupBy({
      by: ['userId'],
      _sum: { score: true },
      _count: { quizId: true },
    });

    if (scores.length === 0) {
      return [];
    }

    const userIds = scores.map((score) => score.userId);

    const users = await this.databaseService.user.findMany({
      where: { id: { in: userIds } },
      select: { id: true, name: true },
    });

    const formattedScores = scores.map((score) => {
      const user = users.find((u) => u.id === score.userId);
      return {
        id: user?.id,
        name: user?.name || 'Nepoznati korisnik',
        totalScore: score._sum.score || 0,
        quizCount: score._count.quizId,
      };
    });

    return formattedScores.sort((a, b) => b.totalScore - a.totalScore);
  }

  async userRating(userId: string) {
    const leaderboard = await this.scoreLeaderboard();

    const userRatingIndex = leaderboard.findIndex(
      (userResult) => userResult.id === userId,
    );

    if (userRatingIndex === -1)
      throw new BadRequestException('User rating not found');

    return userRatingIndex + 1;
  }
}
