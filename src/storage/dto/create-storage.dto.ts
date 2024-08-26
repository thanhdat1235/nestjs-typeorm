import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateStorageDto {
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsNumber()
  capacity: number;

  @IsNotEmpty()
  @IsNumber()
  readSpeed: number;

  @IsNotEmpty()
  @IsNumber()
  writeSpeed: number;
}
