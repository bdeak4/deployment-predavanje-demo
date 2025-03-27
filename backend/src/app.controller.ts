import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Dobij pozdrav Hello World!' })
  @ApiResponse({ status: 200, description: 'Tekst za pozdrav:', type: String })
  getHello(): string {
    return this.appService.getHello();
  }
}
