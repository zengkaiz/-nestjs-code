import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Zack } from './zack';
import { AaaController } from './aaa.controller';

@Module({
  imports: [],
  controllers: [AppController, AaaController],
  providers: [
    AppService,
    Zack,
    {
      provide: 'Zack',
      useFactory() {
        return {
          name: 'zack',
        };
      },
    },
  ],
})
export class AppModule {}
