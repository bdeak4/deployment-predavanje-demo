import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 201, description: 'User successfully logged in' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiBody({ type: LoginDto })
  async login(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const { access_token, refresh_token } = await this.authService.login(
      body.email,
      body.password,
    );

    res.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    res.status(HttpStatus.OK).json({ access_token });
  }

  @Post('register')
  @ApiOperation({ summary: 'Register user' })
  @ApiResponse({ status: 201, description: 'User successfully registered' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiBody({ type: RegisterDto })
  async register(
    @Body() body: { name: string; email: string; password: string },
  ) {
    return this.authService.register(body.name, body.email, body.password);
  }
}
