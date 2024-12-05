import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCartItemDto: CreateCartItemDto) {
    return this.prisma.cart_Item.create({
      data: createCartItemDto,
    });
  }

  async findAll() {
    return this.prisma.cart_Item.findMany();
  }

  async findOne(id: number) {
    return this.prisma.cart_Item.findUnique({
      where: { cart_item_id: id },
    });
  }

  async update(id: number, updateCartItemDto: UpdateCartItemDto) {
    return this.prisma.cart_Item.update({
      where: { cart_item_id: id },
      data: updateCartItemDto,
    });
  }

  async remove(id: number) {
    return this.prisma.cart_Item.delete({
      where: { cart_item_id: id },
    });
  }
}
