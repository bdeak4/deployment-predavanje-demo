import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CategoryService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const existingCategoryName = await this.databaseService.category.findUnique(
      {
        where: { name: createCategoryDto.name },
      },
    );

    if (existingCategoryName)
      throw new BadRequestException('Category name already exists');

    return this.databaseService.category.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return this.databaseService.category.findMany();
  }

  async findOne(id: string) {
    const category = await this.databaseService.category.findUnique({
      where: { id },
    });

    if (!category) throw new BadRequestException('Category not found');

    return category;
  }

  async update(id: string, updateCategoryDto: CreateCategoryDto) {
    const category = await this.databaseService.category.findUnique({
      where: { id },
    });

    if (!category) throw new BadRequestException('Category not found');

    const existingCategoryName = await this.databaseService.category.findUnique(
      {
        where: { name: updateCategoryDto.name },
      },
    );

    if (existingCategoryName)
      throw new BadRequestException('Category name already exists');

    return this.databaseService.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: string) {
    const category = await this.databaseService.category.findUnique({
      where: { id },
    });

    if (!category) throw new BadRequestException('Category not found');

    return this.databaseService.category.delete({
      where: { id },
    });
  }
}
