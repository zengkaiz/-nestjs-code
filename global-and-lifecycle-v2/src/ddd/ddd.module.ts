import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { DddService } from './ddd.service';
import { DddController } from './ddd.controller';

@Module({
  controllers: [DddController],
  providers: [DddService],
})
export class DddModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('DddModule OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('DddModule onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('DddModule OnModuleDestroy');
  }
  beforeApplicationShutdown() {
    console.log('DddModule BeforeApplicationShutdown');
  }
  onApplicationShutdown() {
    console.log('DddModule OnApplicationShutdown');
  }
}
