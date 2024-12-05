import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@ApiTags('order-items')
@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Create order item' })
  @ApiResponse({
    status: 201,
    description: 'The order item has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all order items' })
  @ApiResponse({ status: 200, description: 'Return all order items.' })
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get order item by id' })
  @ApiResponse({ status: 200, description: 'Return the order item.' })
  @ApiResponse({ status: 404, description: 'Order item not found.' })
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update order item' })
  @ApiResponse({
    status: 200,
    description: 'The order item has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Order item not found.' })
  update(
    @Param('id') id: string,
    @Body() updateOrderItemDto: UpdateOrderItemDto,
  ) {
    return this.orderItemsService.update(+id, updateOrderItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete order item' })
  @ApiResponse({
    status: 200,
    description: 'The order item has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Order item not found.' })
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(+id);
  }
}
