import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('luisin')
  @ApiOperation({ summary: 'Get hello message' })
  @ApiResponse({ status: 200, description: 'Returns a hello message' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('rastro')
  @ApiOperation({ summary: 'Get rastro message' })
  @ApiResponse({ status: 200, description: 'Returns a rastro message' })
  getRastro(): string {
    return this.appService.getRastro();
  }
}
