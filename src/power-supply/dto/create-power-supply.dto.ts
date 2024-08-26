import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePowerSupplyDto {
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  wattage: number;

  @IsNotEmpty()
  @IsString()
  certification: string;

  @IsNotEmpty()
  @IsString()
  formFactor: string;
}
