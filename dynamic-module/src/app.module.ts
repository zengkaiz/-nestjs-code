import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';

@Module({
  imports: [
    BbbModule.register({ aaa: 1, bbb: 2 }),
    CccModule.register({
      aaa: 1,
      bbb: 'nbbb',
      isGlobal: true,
    }),
    CccModule.registerAsync({
      useFactory: async () => {
        await 111;
        return {
          aaa: 222,
          bbb: 'bbbb',
        };
      },
      inject: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
