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
import { CartItemsService } from './cart-items.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@ApiTags('cart-items')
@Controller('cart-items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Create cart item' })
  @ApiResponse({
    status: 201,
    description: 'The cart item has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemsService.create(createCartItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cart items' })
  @ApiResponse({ status: 200, description: 'Return all cart items.' })
  findAll() {
    return this.cartItemsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get cart item by id' })
  @ApiResponse({ status: 200, description: 'Return the cart item.' })
  @ApiResponse({ status: 404, description: 'Cart item not found.' })
  findOne(@Param('id') id: string) {
    return this.cartItemsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update cart item' })
  @ApiResponse({
    status: 200,
    description: 'The cart item has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Cart item not found.' })
  update(
    @Param('id') id: string,
    @Body() updateCartItemDto: UpdateCartItemDto,
  ) {
    return this.cartItemsService.update(+id, updateCartItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete cart item' })
  @ApiResponse({
    status: 200,
    description: 'The cart item has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Cart item not found.' })
  remove(@Param('id') id: string) {
    return this.cartItemsService.remove(+id);
  }
}
