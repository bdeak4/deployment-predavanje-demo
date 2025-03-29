import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Answer')
@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new answer' })
  @ApiResponse({ status: 201, description: 'Answer successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiBody({ type: CreateAnswerDto })
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.create(createAnswerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all answers' })
  @ApiResponse({
    status: 200,
    description: 'List of answers returned successfully',
  })
  findAll() {
    return this.answerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a answer by ID' })
  @ApiResponse({ status: 200, description: 'Answer found' })
  @ApiResponse({ status: 404, description: 'Answer not found' })
  findOne(@Param('id') id: string) {
    return this.answerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a answer by ID' })
  @ApiResponse({ status: 200, description: 'Answer updated successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiResponse({ status: 404, description: 'Answer not found' })
  @ApiBody({ type: UpdateAnswerDto })
  update(@Param('id') id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    return this.answerService.update(id, updateAnswerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a answer by ID' })
  @ApiResponse({ status: 200, description: 'Answer deleted successfully' })
  @ApiResponse({ status: 404, description: 'Answer not found' })
  remove(@Param('id') id: string) {
    return this.answerService.remove(id);
  }
}
