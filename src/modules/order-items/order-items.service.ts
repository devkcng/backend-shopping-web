import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Injectable()
export class OrderItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderItemDto: CreateOrderItemDto) {
    return this.prisma.order_Item.create({
      data: createOrderItemDto,
    });
  }

  async findAll() {
    return this.prisma.order_Item.findMany();
  }

  async findOne(id: number) {
    return this.prisma.order_Item.findUnique({
      where: { order_item_id: id },
    });
  }

  async update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return this.prisma.order_Item.update({
      where: { order_item_id: id },
      data: updateOrderItemDto,
    });
  }

  async remove(id: number) {
    return this.prisma.order_Item.delete({
      where: { order_item_id: id },
    });
  }
}
