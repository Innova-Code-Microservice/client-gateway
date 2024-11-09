import { Controller, Get, Post, Body, Param, Inject, Query } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { NATS_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('orders')
export class OrdersController {

  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy
  ) { }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.client.send("createOrder", createOrderDto)
      .pipe(
        catchError(error => { throw new RpcException(error) })
      );
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.client.send("findAllOrders", paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send("findOneOrder", id)
      .pipe(
        catchError(error => { throw new RpcException(error) })
      );
  }

}