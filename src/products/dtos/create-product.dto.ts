import { IsString, MaxLength, MinLength } from 'class-validator';
export class CreateProductDto {
  @MinLength(4)
  @MaxLength(256)
  @IsString()
  productName: string;

  @MinLength(4)
  @MaxLength(256)
  @IsString()
  description: string;
}
