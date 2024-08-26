import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCaseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  formFactor: string;

  @IsString()
  size: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  dimensions: string;

  productId: string;
}
