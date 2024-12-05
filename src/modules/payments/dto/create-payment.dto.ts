import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty()
  order_id: number;

  @ApiProperty()
  payment_date: Date;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  payment_method: string;
}
