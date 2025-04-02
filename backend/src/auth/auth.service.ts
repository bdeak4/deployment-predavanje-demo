import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from '@prisma/client';
import { compare, hash } from 'bcryptjs';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private databaseService: DatabaseService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.databaseService.user.findUnique({
      where: { email },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const token = this.generateToken(user.id, user.role);
    const refreshToken = this.generateRefreshToken(user.id);

    return { access_token: token, refresh_token: refreshToken };
  }

  async register(name: string, email: string, password: string) {
    const existingUserName = await this.databaseService.user.findUnique({
      where: { name },
    });

    if (existingUserName)
      throw new ForbiddenException({
        message: 'User with this name already exists',
      });

    const existingUserEmail = await this.databaseService.user.findUnique({
      where: { email },
    });

    if (existingUserEmail)
      throw new ForbiddenException({
        message: 'User with this email already exists',
      });

    const hashedPassword = await hash(password, 10);

    const newUser = await this.databaseService.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: UserRole.USER,
      },
    });

    return {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    };
  }

  private generateToken(userId: string, role: string) {
    const payload = { sub: userId, role };
    return this.jwtService.sign(payload, { expiresIn: '15m' });
  }

  private generateRefreshToken(userId: string) {
    const payload = { sub: userId };
    return this.jwtService.sign(payload, { expiresIn: '7d' });
  }
}
