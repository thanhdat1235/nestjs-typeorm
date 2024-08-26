import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateGpuDto {
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  memorySize: number;

  @IsNotEmpty()
  @IsString()
  memoryType: string;

  @IsNotEmpty()
  @IsNumber()
  coreClock: number;

  @IsNotEmpty()
  @IsNumber()
  boostClock: number;

  @IsNotEmpty()
  @IsNumber()
  tdp: number;
}
