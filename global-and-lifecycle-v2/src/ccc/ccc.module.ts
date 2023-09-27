import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('CccModule OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('CccModule onApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('CccModule OnModuleDestroy');
  }
  beforeApplicationShutdown(signal: string) {
    // const cccService = this.moduleRef.get<CccService>(CccService);
    // console.log('-----------,', cccService.findOne(1));
    console.log('CccModule BeforeApplicationShutdown', signal);
  }
  onApplicationShutdown() {
    const cccService = this.moduleRef.get<CccService>(CccService);
    console.log('-----------,', cccService.findAll());
    console.log('CccModule OnApplicationShutdown');
  }
}
