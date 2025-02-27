import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { OrdersService } from './providers/orders.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Post('Create')
  public async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return await this.orderService.createOrder(createOrderDto);
  }

  @Get('list')
  public async getProducts() {
    return await this.orderService.listOrder();
  }

  @Delete('delete')
  public deletePost(@Query('id', ParseIntPipe) id: number) {
    return this.orderService.delete(id);
  }
}
