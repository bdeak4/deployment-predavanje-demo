import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CategoryService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createCategoryDto: CreateCategoryDto) {
    return this.databaseService.category.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return this.databaseService.category.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.category.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateCategoryDto: CreateCategoryDto) {
    return this.databaseService.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.category.delete({
      where: { id },
    });
  }
}
