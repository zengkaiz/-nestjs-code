import {
  BadGatewayException,
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaDto } from './aaa.dto';
import { UnLoginException } from './unlogin.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // throw new BadGatewayException('yyy');
    // throw new BadRequestException('yyy');
    throw new UnLoginException();
    return this.appService.getHello();
  }

  @Post('aaa')
  aaa(@Body() aaaDto: AaaDto) {
    return 'success';
  }
}
