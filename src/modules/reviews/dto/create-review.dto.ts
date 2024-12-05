import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  product_id: number;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  comment: string;
}
