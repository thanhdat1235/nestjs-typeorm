import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMotherboardDto {
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  socketType: string;

  @IsNotEmpty()
  @IsString()
  formFactor: string;

  @IsNotEmpty()
  @IsString()
  chipset: string;
}
