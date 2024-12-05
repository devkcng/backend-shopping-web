import { ApiProperty } from '@nestjs/swagger';

export class CreateCartItemDto {
  @ApiProperty()
  cart_id: number;

  @ApiProperty()
  product_id: number;

  @ApiProperty()
  quantity: number;
}
