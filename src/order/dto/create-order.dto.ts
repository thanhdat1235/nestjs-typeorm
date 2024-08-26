import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  totalPrice: number;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  quantity: string;

  @IsDate()
  orderDate: Date;
}
