import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserQuizResultService } from './user-quiz-result.service';
import { CreateUserQuizResultDto } from './dto/create-user-quiz-result.dto';
import { UpdateUserQuizResultDto } from './dto/update-user-quiz-result.dto';

@Controller('user-quiz-result')
export class UserQuizResultController {
  constructor(private readonly userQuizResultService: UserQuizResultService) {}

  @Post()
  create(@Body() createUserQuizResultDto: CreateUserQuizResultDto) {
    return this.userQuizResultService.create(createUserQuizResultDto);
  }

  @Get()
  findAll() {
    return this.userQuizResultService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userQuizResultService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserQuizResultDto: UpdateUserQuizResultDto,
  ) {
    return this.userQuizResultService.update(+id, updateUserQuizResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userQuizResultService.remove(+id);
  }
}
