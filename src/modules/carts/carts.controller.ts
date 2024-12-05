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
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@ApiTags('carts')
@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  @ApiOperation({ summary: 'Create cart' })
  @ApiResponse({
    status: 201,
    description: 'The cart has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartsService.create(createCartDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all carts' })
  @ApiResponse({ status: 200, description: 'Return all carts.' })
  findAll() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get cart by id' })
  @ApiResponse({ status: 200, description: 'Return the cart.' })
  @ApiResponse({ status: 404, description: 'Cart not found.' })
  findOne(@Param('id') id: string) {
    return this.cartsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update cart' })
  @ApiResponse({
    status: 200,
    description: 'The cart has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Cart not found.' })
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartsService.update(+id, updateCartDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete cart' })
  @ApiResponse({
    status: 200,
    description: 'The cart has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Cart not found.' })
  remove(@Param('id') id: string) {
    return this.cartsService.remove(+id);
  }
}
