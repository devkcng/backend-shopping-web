import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCartDto: CreateCartDto) {
    return this.prisma.cart.create({
      data: createCartDto,
    });
  }

  async findAll() {
    return this.prisma.cart.findMany();
  }

  async findOne(id: number) {
    return this.prisma.cart.findUnique({
      where: { cart_id: id },
    });
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    return this.prisma.cart.update({
      where: { cart_id: id },
      data: updateCartDto,
    });
  }

  async remove(id: number) {
    return this.prisma.cart.delete({
      where: { cart_id: id },
    });
  }
}
