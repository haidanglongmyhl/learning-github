import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateOrderDto {
  @MaxLength(256)
  @MinLength(4)
  @IsString()
  oderName: string;

  @MaxLength(256)
  @MinLength(4)
  @IsString()
  description: string;
}
