import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { compare, hash } from 'bcryptjs';

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
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) throw new BadRequestException('User not found');

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.databaseService.user.findUnique({
      where: { id },
    });

    if (!user) throw new BadRequestException('User not found');

    if (updateUserDto.name && updateUserDto.name !== user.name) {
      const existingUser = await this.databaseService.user.findUnique({
        where: { name: updateUserDto.name },
      });
      if (existingUser) throw new BadRequestException('Username already taken');
    }

    if (updateUserDto.password) {
      if (!updateUserDto.currentPassword) {
        throw new BadRequestException('Current password is required');
      }

      const isPasswordValid = await compare(
        updateUserDto.currentPassword,
        user.password,
      );

      if (!isPasswordValid) {
        throw new ForbiddenException('Incorrect current password');
      }

      updateUserDto.password = await hash(updateUserDto.password, 10);
    }

    const { currentPassword, ...dataToUpdate } = updateUserDto;

    return this.databaseService.user.update({
      where: { id },
      data: dataToUpdate,
    });
  }

  async updateName(id: string, name: string) {
    const user = await this.databaseService.user.findUnique({
      where: { id },
    });

    if (!user) throw new BadRequestException('User not found');

    if (name !== user.name) {
      const existingUser = await this.databaseService.user.findUnique({
        where: { name },
      });
      if (existingUser) throw new BadRequestException('Username already taken');
    }

    return this.databaseService.user.update({
      where: { id },
      data: { name },
    });
  }

  async updatePassword(id: string, password: string, currentPassword: string) {
    const user = await this.databaseService.user.findUnique({
      where: { id },
    });

    if (!user) throw new BadRequestException('User not found');

    if (!currentPassword) {
      throw new BadRequestException('Current password is required');
    }

    const isPasswordValid = await compare(currentPassword, user.password);

    if (!isPasswordValid) {
      throw new ForbiddenException('Incorrect current password');
    }

    password = await hash(password, 10);

    return this.databaseService.user.update({
      where: { id },
      data: { password },
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
