import {
  Controller,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  Inject,
  Ip,
  Optional,
  Param,
  ParseBoolPipe,
  Query,
  Session,
  SetMetadata,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaFilter } from './aaa.filter';
import { RolesGuard } from './aaa.guard';
import { LoggingInterceptor } from './aaa.Interceptor';
import { AaaPipe } from './aaa.pipe';

@Controller()
@SetMetadata('roles', ['user'])
export class AppController {
  constructor(@Optional() private readonly appService: AppService) {}

  @Optional()
  @Inject('Zack')
  private readonly zack: Record<string, any>;

  @Get()
  // @UseFilters(AaaFilter)
  @UseGuards(RolesGuard)
  @UseInterceptors(LoggingInterceptor)
  @SetMetadata('roles', ['admin'])
  getHello(): string {
    console.log(this.zack);
    // throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    return this.appService.getHello();
  }

  @Get('/xxx/:aaa')
  // @UsePipes(AaaPipe)
  getHello2(
    @Param('aaa', AaaPipe) aaa: number,
    @Query('bbb', ParseBoolPipe) bbb: boolean,
  ): string {
    console.log(aaa, bbb);
    return this.appService.getHello();
  }

  @Get('/ccc')
  header(
    @Headers('Accept') accept: string,
    @Headers() headers: Record<string, any>,
  ) {
    console.log(accept, headers);
  }

  @Get('/ip')
  ip(@Ip() ip: string) {
    console.log(ip);
  }

  @Get('/session')
  session(@Session() session) {
    if (!session.count) {
      session.count = 0;
    }
    session.count += 1;
    console.log(session);
    return session.count;
  }
}
