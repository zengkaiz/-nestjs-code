import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [AppController],
  // providers: [AppService], // 简写
  // providers: [
  //   {
  //     provide: AppService,
  //     useClass: AppService,
  //   },
  // ],
  providers: [
    AppService,
    {
      provide: 'app-service',
      useClass: AppService,
    },
    {
      // 指定值
      provide: 'person',
      useValue: {
        name: 'zack',
        age: 20,
      },
    },
    {
      // 动态产生
      provide: 'person2',
      useFactory() {
        return {
          name: 'zack',
          desc: 31,
        };
      },
    },
    {
      // 参数传入
      provide: 'person3',
      inject: ['person', AppService],
      useFactory(person: { name: string }, appService: AppService) {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
    },
    {
      // useFactory支持异步
      provide: 'person4',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
        return {
          name: 'zack',
          desc: 'person4-zack',
        };
      },
    },
    {
      // 指定别名
      provide: 'person5',
      useExisting: 'person2',
    },
  ],
})
export class AppModule {}
