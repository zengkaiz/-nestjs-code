import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class Zack {
  constructor(private appService: AppService) {}
}
