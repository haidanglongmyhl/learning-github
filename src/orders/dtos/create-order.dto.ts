import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateOrderDto {
  @MaxLength(25)
  @MinLength(4)
  @IsString()
  oderName: string;

  @MaxLength(50)
  @MinLength(4)
  @IsString()
  description: string;
}
