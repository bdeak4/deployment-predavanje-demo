import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserQuizResultService } from './user-quiz-result.service';
import { CreateUserQuizResultDto } from './dto/create-user-quiz-result.dto';
import { UpdateUserQuizResultDto } from './dto/update-user-quiz-result.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('User Quiz Result')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
@Controller('result')
export class UserQuizResultController {
  constructor(private readonly userQuizResultService: UserQuizResultService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new quiz result' })
  @ApiResponse({ status: 201, description: 'Quiz result successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiBody({ type: CreateUserQuizResultDto })
  create(
    @Body() createUserQuizResultDto: CreateUserQuizResultDto,
    @Req() req: any,
  ) {
    const userId = req.user.userId;
    return this.userQuizResultService.create(userId, createUserQuizResultDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all quiz results' })
  @ApiResponse({
    status: 200,
    description: 'List of quiz results returned successfully',
  })
  findAll() {
    return this.userQuizResultService.findAll();
  }

  @Get('leaderboard')
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Get user quiz leaderboard' })
  @ApiResponse({
    status: 200,
    description: 'List of user stats returned successfully',
  })
  getScoreLeaderboard() {
    return this.userQuizResultService.scoreLeaderboard();
  }

  @Get('leaderboard/:id')
  @UseGuards(RolesGuard)
  @Roles('USER')
  @ApiOperation({ summary: 'Get user rating' })
  @ApiResponse({
    status: 200,
    description: 'User rating found',
  })
  @ApiResponse({
    status: 404,
    description: 'User rating not found',
  })
  getUserRating(@Param('id') id: string) {
    return this.userQuizResultService.userRating(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a quiz result by ID' })
  @ApiResponse({ status: 200, description: 'Quiz result found' })
  @ApiResponse({ status: 404, description: 'Quiz result not found' })
  findOne(@Param('id') id: string) {
    return this.userQuizResultService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a quiz result by ID' })
  @ApiResponse({ status: 200, description: 'Quiz result updated successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiResponse({ status: 404, description: 'QueQuiz result not found' })
  @ApiBody({ type: UpdateUserQuizResultDto })
  update(
    @Param('id') id: string,
    @Body() updateUserQuizResultDto: UpdateUserQuizResultDto,
  ) {
    return this.userQuizResultService.update(id, updateUserQuizResultDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a quiz result by ID' })
  @ApiResponse({ status: 200, description: 'Quiz result deleted successfully' })
  @ApiResponse({ status: 404, description: 'Quiz result not found' })
  remove(@Param('id') id: string) {
    return this.userQuizResultService.remove(id);
  }
}
