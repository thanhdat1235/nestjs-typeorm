import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  // Add relations
  @IsNotEmpty()
  cpuId: string;

  @IsNotEmpty()
  gpuId: string;

  @IsNotEmpty()
  ramId: string;

  @IsNotEmpty()
  storageId: string;

  @IsNotEmpty()
  powerSupplyId: string;

  @IsNotEmpty()
  caseId: string;

  @IsNotEmpty()
  motherboardId: string;

  @IsNotEmpty()
  categoryId: string;
}
