import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../product.entity';
import { CreateProductDto } from '../dtos/create-product.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  public async createProduct(createProductDto: CreateProductDto) {
    let newProduct = this.productsRepository.create(createProductDto);
    newProduct = await this.productsRepository.save(newProduct);

    return newProduct;
  }
  public async getList() {
    return await this.productsRepository.find();
  }
}
