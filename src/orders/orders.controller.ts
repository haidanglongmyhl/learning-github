import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './providers/orders.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Post('Create')
  public async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return await this.orderService.createOrder(createOrderDto);
  }
}
