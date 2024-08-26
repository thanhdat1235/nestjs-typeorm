import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCpuDto {
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  cores: number;

  @IsNotEmpty()
  @IsNumber()
  threads: number;

  @IsNotEmpty()
  @IsNumber()
  baseClock: number;

  @IsNotEmpty()
  @IsNumber()
  boostClock: number;

  @IsNotEmpty()
  @IsString()
  socketType: string;

  @IsNotEmpty()
  @IsNumber()
  tdp: number;

  @IsNotEmpty()
  @IsString()
  integratedGraphics: string;
}
