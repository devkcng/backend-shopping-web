import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  order_date: Date;

  @ApiProperty()
  total_amount: number;

  @ApiProperty()
  status: string;
}
