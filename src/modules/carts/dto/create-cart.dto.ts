import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  created_date: Date;
}
