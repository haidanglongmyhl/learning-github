import { Body, Controller, Post } from '@nestjs/common';
import { CategoriesService } from './providers/categories.service';
import { CreateCategoryDto } from './dtos/create-category';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('create')
  public async createProduct(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoriesService.createCategory(createCategoryDto);
  }
}
