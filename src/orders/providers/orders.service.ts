import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../order.entity';
import { CreateOrderDto } from '../dtos/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  public async createOrder(createOrderDto: CreateOrderDto) {
    let newOrder = this.ordersRepository.create(createOrderDto);
    newOrder = await this.ordersRepository.save(newOrder);

    return newOrder;
  }
}
