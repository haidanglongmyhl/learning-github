import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @MinLength(4)
  @MaxLength(256)
  @IsString()
  categoryName: string;

  @MinLength(4)
  @MaxLength(256)
  @IsString()
  description: string;
}
