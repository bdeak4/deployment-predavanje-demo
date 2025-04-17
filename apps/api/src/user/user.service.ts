import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    const existingUserName = await this.databaseService.user.findUnique({
      where: { name: createUserDto.name },
    });

    if (existingUserName) {
      throw new BadRequestException('Username is already taken');
    }

    const existingUserEmail = await this.databaseService.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existingUserEmail) {
      throw new BadRequestException('Email is already used');
    }

    return this.databaseService.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.databaseService.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.databaseService.user.findUnique({
      where: { id },
    });

    if (!user) throw new BadRequestException('User not found');

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.databaseService.user.findUnique({
      where: { id },
    });

    if (!user) throw new BadRequestException('User not found');

    if (updateUserDto.name) {
      const existingUserName = await this.databaseService.user.findUnique({
        where: { name: updateUserDto.name },
      });

      if (existingUserName)
        throw new BadRequestException('Username is already taken');
    }

    return this.databaseService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }
  async remove(id: string) {
    const user = await this.databaseService.user.findUnique({
      where: { id },
    });

    if (!user) throw new BadRequestException('User not found');

    return this.databaseService.user.delete({
      where: { id },
    });
  }
}
