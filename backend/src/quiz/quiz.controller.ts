import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private readonly userService: QuizService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new quiz' })
  @ApiResponse({ status: 201, description: 'Quiz successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiBody({ type: CreateQuizDto })
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.userService.create(createQuizDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all quizes' })
  @ApiResponse({
    status: 200,
    description: 'List of quizes returned successfully',
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a quiz by ID' })
  @ApiResponse({ status: 200, description: 'Quiz found' })
  @ApiResponse({ status: 404, description: 'Quiz not found' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a quiz by ID' })
  @ApiResponse({ status: 200, description: 'Quiz updated successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiResponse({ status: 404, description: 'Quiz not found' })
  @ApiBody({ type: UpdateQuizDto })
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.userService.update(id, updateQuizDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a quiz by ID' })
  @ApiResponse({ status: 200, description: 'Quiz deleted successfully' })
  @ApiResponse({ status: 404, description: 'Quiz not found' })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
