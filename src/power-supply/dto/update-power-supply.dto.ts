import { PartialType } from '@nestjs/mapped-types';
import { CreatePowerSupplyDto } from './create-power-supply.dto';

export class UpdatePowerSupplyDto extends PartialType(CreatePowerSupplyDto) {}
