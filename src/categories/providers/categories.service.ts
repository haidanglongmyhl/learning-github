import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../category.entity';
import { CreateCategoryDto } from '../dtos/create-category';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ) {}

  public async createCategory(createCategoryDto: CreateCategoryDto) {
    let newCategory = this.categoriesRepository.create(createCategoryDto);
    newCategory = await this.categoriesRepository.save(newCategory);

    return newCategory;
  }

  public async getList() {
    return await this.categoriesRepository.find();
  }
}
