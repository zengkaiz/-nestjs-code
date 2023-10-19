import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class AaaDto {
  @IsNotEmpty({ message: 'aaa 不能为空' })
  @IsEmail({}, { message: 'aaa 不是邮件' })
  aaa: string;

  @IsNumber({}, { message: 'bbb 不是数字' })
  @IsNotEmpty({ message: 'bbb 不能为空' })
  bbb: number;
}
