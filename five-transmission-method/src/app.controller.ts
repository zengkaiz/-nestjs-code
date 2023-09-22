import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {} // 1. 构造器注入
  @Inject('app-service') private readonly appService: AppService; // 2. 属性注入
  @Inject('person') private readonly person: { name: string; age: number };
  @Inject('person2') private readonly person2: { name: string; desc: number };
  @Inject('person3') private readonly person3: { name: string; desc: number };
  @Inject('person4') private readonly person4: { name: string; desc: number };
  @Inject('person5') private readonly person5: { name: string; desc: number };

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
