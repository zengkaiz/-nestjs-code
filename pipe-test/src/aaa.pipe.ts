import {
  ArgumentMetadata,
  BadRequestException,
  Inject,
  Injectable,
  Optional,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class AaaPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata);
    return 'aaa';
  }
}

export class MyValidationPipe implements PipeTransform<any> {
  @Optional()
  @Inject('validation_options')
  private options;

  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype) {
      return value;
    }
    console.log(this.options);

    const object = plainToInstance(metatype, value);
    const errros = await validate(object);
    if (errros.length > 0) {
      throw new BadRequestException('参数类型失败');
    }
    return value;
  }
}
